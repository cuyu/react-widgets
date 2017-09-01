import React, {Component} from 'react';
import Form from "react-jsonschema-form";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

const uiSchema = {
    title: {
        "customWidth": 300
    },
    done: {
        "customWidth": 200
    }
};

const log = (type) => console.log.bind(console, type);


function CustomFieldTemplate(props) {
    const {id, classNames, label, help, required, description, errors, children, uiSchema} = props;
    console.log(props)
    return (
        <div className={classNames} style={{width: "200px"}} >
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            {children}
            {errors}
            {help}
        </div>
    );
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <Form schema={schema}
                      uiSchema={uiSchema}
                      onChange={log("changed")}
                      onSubmit={log("submitted")}
                      onError={log("errors")}
                      FieldTemplate={CustomFieldTemplate}
                />
            </div>
        );
    }
}

export default App;
