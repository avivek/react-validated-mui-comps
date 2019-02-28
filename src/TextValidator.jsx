/* eslint-disable */
import React from 'react';
import TextField from '@material-ui/core/TextField';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core-vivek';

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
