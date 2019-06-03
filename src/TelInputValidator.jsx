/* eslint-disable */
import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
/* eslint-enable */

import { ValidatorComponent } from 'react-form-validator-core-vivek';
import TextValidator from './TextValidator';
import {FormControl,FormHelperText} from '@material-ui/core'
import 'react-intl-tel-input/dist/main.css';


export default class ValidatedTelInput extends ValidatorComponent {
    constructor(props)
    {
        super(props);
        this.state = {...this.state,isPhoneValid:true
        }
    }

    onPhoneNumberChange = (isValid,enteredNumber,dialCodeObject) => {
        if(enteredNumber.length === 0)
        {
            this.setState({isPhoneValid:true});
        }
        else{
            this.setState({isPhoneValid:isValid});
        }   
        this.setChanged(true);
        if(this.props.onPhoneNumberChange)
        {
            this.props.onPhoneNumberChange(isValid,enteredNumber,dialCodeObject)
        }
    }

    onPhoneBlur = (isValid,enteredNumber,dialCodeObject) => {
        this.setBlurred(true);
        if(this.props.onPhoneNumberBlur)
        {
            this.props.onPhoneNumberBlur(isValid,enteredNumber,dialCodeObject);
        }
    }


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
            onPhoneNumberChange,onPhoneNumberBlur,
            invalidPhoneNumberMessage,
            ...rest
        } = this.props;


        const { isValid,changed,blurred } = this.state;
        return (
            <FormControl
            error={(!isValid && changed && blurred)||(!this.state.isPhoneValid && changed && blurred)}
            
        >
    <IntlTelInput
      onPhoneNumberChange={this.onPhoneNumberChange}
      onPhoneNumberBlur={this.onPhoneBlur}
      {...rest}
    />
    <TextValidator  value={this.state.isPhoneValid?1:-1} style = {{display:"none"}} validators = {["isPositive"]} errorMessages= {[invalidPhoneNumberMessage]}/>

            <FormHelperText> {(!isValid && changed && blurred && this.getErrorMessage())||(!this.state.isPhoneValid && changed && blurred && invalidPhoneNumberMessage)  || helperText} </FormHelperText>
            </FormControl>
        );
    }
}

