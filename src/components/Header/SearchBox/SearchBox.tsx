import React, {FC} from 'react';
import {Field, reduxForm, SubmitHandler} from "redux-form";

type PropsType = {
    handleSubmit: SubmitHandler
}

const SearchBoxForm: FC<PropsType> = ({handleSubmit}) => {
    return (
            <form onSubmit={handleSubmit}>
                <Field name={"SearchMovie"} component={"input"} placeholder={"Search"}/>
            </form>
    )
}

const SearchBox = reduxForm({form: "SearchBox"})(SearchBoxForm);

export default SearchBox;