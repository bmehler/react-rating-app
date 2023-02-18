import { Form } from 'react-bootstrap';


export const EmployeeFormFields = ({ register, errors, create }) => {

    const fields = [
        { label: 'Name', name: 'name', error: 'Please enter name', type: 'text', placeholder: 'Name', id: 'name' },
        { label: 'City', name: 'city', error: 'Please enter city', type: 'text', placeholder: 'City', id: 'city' },
        { label: 'Gender', name: 'gender', error: 'Please enter gender', type: 'text', placeholder: 'Gender', id: 'gender' },
        { label: 'Age', name: 'age', error: 'Please enter age', type: 'text', placeholder: 'Age', id: 'age' },
        { label: 'Department', name: 'department', error: 'Please enter department', type: 'text', placeholder: 'Department', id: 'department' }
    ]

    let readonly = { create };

    return (
        fields.map((field) => (
            <Form.Group key={field.id} className="mb-2">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type={field.type} name={field.name} id={field.id} placeholder={field.placeholder} {...register(field.name, { required: true })} readOnly={readonly.create.length === 1 ? "readOnly" : ""} style={{ backgroundColor: `#f2f2f2` }} />
            </Form.Group>
        ))
    )
}
