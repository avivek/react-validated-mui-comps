/* eslint-disable */
import React from 'react';
import TextField from '@material-ui/core/TextField';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core';

export default class TextValidator extends ValidatorComponent {

    render() {
        /* eslint-disable no-unused-vars */
        const {
            error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            onChange,
            onBlur,
            ...rest
        } = this.props;
        const { isValid,changed,blurred } = this.state;
        console.log ('isValid is' + isValid);
        console.log('changed is' + changed);
        console.log('blurred is' + blurred);
        return (
            <TextField
                {...rest}
                error={(!isValid) && changed && blurred}
                onChange = {this.componentOnChange}
                onBlur = {this.componentOnBlur}
                helperText={((!isValid) && changed && blurred && this.getErrorMessage()) || helperText}
            />
        );
    }
}
