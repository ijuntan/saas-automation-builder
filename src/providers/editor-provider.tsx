'use client'
import {
    Dispatch,
    createContext,
    useContext,
    useEffect,
    useReducer
} from 'react'
import { EditorNodeType } from '@/lib/types';

type Props = {}

export type EditorNode = EditorNodeType;

export type Editor = {
    elements: EditorNode[]
    edges: {
        id: string
        source: string
        target: string
    }[]
    selectedNode: EditorNodeType
}

export type HistoryState = {
    history: Editor[]
    currentIndex: number
}

export type EditorState = {
    editor: Editor
    history: HistoryState
}

export type EditorActions =
    | {
        type: 'LOAD_DATA'
        payload: {
            elements: EditorNode[]
            edges: {
                id: string
                source: string
                target: string
            }[]
        }
      }
    | {
        type: 'UPDATE_NODE'
        payload: {
            elements: EditorNode[]
        }
      }
    | { type: 'REDO'}
    | { type: 'UNDO'}
    | {
        type: 'SELECTED_ELEMENT'
        payload: {
            elements: EditorNode
        }
      }

const initialEditorState: EditorState['editor'] = {
    elements: [],
    selectedNode: {
        data: {
            completed: false,
            current: false,
            description: '',
            metadata: {},
            title: '',
            type: 'Trigger'
        },
        id: '',
        position: {
            x: 0,
            y: 0
        },
        type: 'Trigger'
    },
    edges: []
};

const initialHistoryState: HistoryState = {
    history: [initialEditorState],
    currentIndex: 0
}

const initialState: EditorState = {
    editor: initialEditorState,
    history: initialHistoryState
}

const editorReducer = (
    state: EditorState = initialState, 
    action: EditorActions
): EditorState => {
    switch(action.type) {
        case 'LOAD_DATA':
            return {
                ...state,
                editor: {
                    ...state.editor,
                    elements: action.payload.elements || initialEditorState.elements,
                    edges: action.payload.edges
                }
            }
    
        case 'SELECTED_ELEMENT':
            return {
                ...state,
                editor: {
                    ...state.editor,
                    selectedNode: action.payload.elements
                }
            }

        case 'REDO':
            if(state.history.currentIndex < state.history.history.length - 1) {
                const nextIndex = state.history.currentIndex + 1;
                const nextEditorState = {...state.history.history[nextIndex]}
                const redoState = {
                    ...state,
                    editor: nextEditorState,
                    history: {
                        ...state.history,
                        currentIndex: nextIndex
                    }
                }
                return redoState;
            }
            return state;
        
        case 'UNDO':
            if(state.history.currentIndex > 0) {
                const prevIndex = state.history.currentIndex - 1;
                const prevEditorState = {...state.history.history[prevIndex]}
                const undoState = {
                    ...state,
                    editor: prevEditorState,
                    history: {
                        ...state.history,
                        currentIndex: prevIndex
                    }
                }
                return undoState;
            }
            return state;

        default:
            return state;
    }
}   

export type EditorContextData = {
    previewMode: boolean,
    setPreviewMode: (previewMode: boolean) => void,
}

export const EditorContext = createContext<{
    state: EditorState
    dispatch: Dispatch<EditorActions>
}>({
    state: initialState,
    dispatch: () => undefined
})

type EditorProps = {
    children: React.ReactNode
}

export const EditorProvider = ({ children }: EditorProps) => {
    const [state, dispatch] = useReducer(editorReducer, initialState)

    return (
        <EditorContext.Provider value={{ state, dispatch }}>
            {children}
        </EditorContext.Provider>
    )
}

export const useEditor = () => {
    const context = useContext(EditorContext)
    if (!context) {
      throw new Error('useEditor Hook must be used within the editor Provider')
    }
    return context
}