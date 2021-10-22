import React, {FC} from 'react'
import {Formik, Form, Field} from 'formik'
import {Button} from '../../Common/Button/Button'
import {FilterType} from '../../redux/usersReducer'

const UserSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}
type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: FC<PropsType> = React.memo((props) => {
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={UserSearchFormValidate}
            onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    <Field type='search' name='term'/>
                    <Field name='friend' as='select'>
                        <option value='null'>All users</option>
                        <option value='true'>Friends</option>
                        <option value='false'>Users</option>
                    </Field>
                    <Button type='submit' disabled={isSubmitting}>
                        Search
                    </Button>

                </Form>
            )}
        </Formik>
    </div>
})
