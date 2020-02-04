import React from 'react';
import {Field, reduxForm} from "redux-form";

const SearchBoxForm = (props) => {
    return (<>
        <form onSubmit={props.handleSubmit}>
            <Field name={"SearchMovie"} component={"input"} placeholder={"Search"} />
        </form>
</>
    )}

const SearchBox = reduxForm({form: "SearchBox"})(SearchBoxForm);



export default SearchBox;