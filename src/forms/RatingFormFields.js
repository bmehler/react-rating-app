import { Form } from 'react-bootstrap';


export const RatingFormFields = ({ register }) => {

    const fields = [
        { label: 'Quality/Achive usable results', name: 'quality', type: 'select' },
        { label: 'Working pace/Quantity', name: 'quantity', type: 'select' },
        { label: 'Expertise', name: 'knowledge', type: 'select' },
        { label: 'Initiative', name: 'initiative', type: 'select' },
        { label: 'Communication skills', name: 'communication', type: 'select' },
        { label: 'Ability to work in a team', name: 'team', type: 'select' },
        { label: 'Abiltity to learn/Readiness of mind', name: 'learning', type: 'select' },
        { label: 'Motivation', name: 'motivation', type: 'select' },
        { label: 'Appearance/Acceptance among their colleagues and external partners', name: 'performance', type: 'select' },
        { label: 'Planning and organizational skills', name: 'organization', type: 'select' },
    ]

    return (
        fields.map((field) => (
            <Form.Group key={field.label} className="mb-2">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control as={field.type} name={field.name} {...register(field.name)}>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option>
                    <option>70</option>
                    <option>80</option>
                    <option>90</option>
                    <option>100</option>
                </Form.Control>
            </Form.Group>
        ))
    )
}
