/* eslint-disable */
import React from 'react';
import {RadioGroup,FormHelperText,FormControl} from '@material-ui/core';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core-vivek';

export default class RadioGroupValidator extends ValidatorComponent {

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
            children,
            ...rest
        } = this.props;
        const { isValid,changed,blurred } = this.state;
        return (
            <FormControl
            error={!isValid && changed && blurred}>
            <RadioGroup
                {...rest}
                onChange = {this.componentOnChange}
                onBlur = {this.componentOnBlur}
            >
            {this.props.children}
            </RadioGroup>
            <FormHelperText>{(!isValid && changed && blurred && this.getErrorMessage()) || helperText}</FormHelperText>
            </FormControl>
        );
    }
}