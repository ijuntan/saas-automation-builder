'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { set, z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
    user: any
    onUpdate?: any
}

const ProfileForm = ({ user, onUpdate }: Props) => {
    const [isLoading, setIsLoading] = React.useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })

    const handleSubmit = async(values: z.infer<typeof EditUserProfileSchema>) => {
        setIsLoading(true)
        await onUpdate(values.name)
        setIsLoading(false)
    }

    useEffect(() => {
        form.reset({ name: user.name, email: user.email})
    }, [user])

    return (
        <Form {...form}>
            <form className='flex flex-col gap-6'
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField 
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Username</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder='Name'
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>

            <form className='flex flex-col gap-6'>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder='Email'
                                    type='email'
                                    disabled={true}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>

            <Button
                type="submit"
                className='self-start hover:bg-[#2F006B] hover:text-white'
            >
                {
                    isLoading
                    ?
                    <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                    Saving...
                    </>
                    :
                    'Save Changes'
                }
            </Button>
        </Form>
    )
}

export default ProfileForm