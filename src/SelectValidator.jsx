/* eslint-disable */
import React from 'react';
/* eslint-enable */
import Select from 'mui-select-with-search-vivek';
import { ValidatorComponent } from 'react-form-validator-core-vivek';

export default class SelectValidator extends ValidatorComponent {

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
            ...rest
        } = this.props;
        const { isValid,changed,blurred } = this.state;
        return (
            <FormControl
            error={!isValid && changed && blurred}
        >
            <Select
                {...rest}
                
                onChange = {this.componentOnChange}
                onBlur = {this.componentOnBlur}
            />
            <FormHelperText>{(!isValid && changed && blurred && this.getErrorMessage()) || helperText}</FormHelperText>
            </FormControl>
        );
    }
}
