/* eslint-disable */
import React from 'react';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

/* eslint-enable */

import { ValidatorComponent } from 'react-form-validator-core-vivek';
import TextValidator from './TextValidator';


export default class ValidatedDate extends ValidatorComponent {
    constructor(props)
    {
        super(props);
        this.state = {...this.state,isDateValid:true,dateError:""
        }
    }

    onDateError = (currentValue,error) => {
        this.setChanged(true);
        this.setBlurred(true);
        !isNaN(currentValue)? this.props.onChange(currentValue):this.props.onChange(null);
        if(!isNaN(currentValue))
        {
            this.setState({isDateValid:false,dateError:error});

        }
    };

    onDateChange = (date) => {
        this.setState({isDateValid:true,dateError:""});
        this.setChanged(true);
        this.setBlurred(true);
        if(this.props.onChange)
        {
            this.props.onChange(date);
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
            onChange,
            onBlur,
            ...rest
        } = this.props;


        const { isValid,changed,blurred,isDateValid } = this.state;
        return (

            <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
            <InlineDatePicker
          onChange={this.onDateChange}
          error={(!isValid && changed && blurred)||(!this.state.isDateValid && changed && blurred)}
          onError = {this.onDateError}
          helperText={((!isValid) && changed && blurred && this.getErrorMessage()) ||((!isDateValid) && changed && blurred && this.state.dateError) || helperText}
          {...rest}
        />
            <TextValidator  value={this.state.isDateValid?1:-1} style = {{display:"none"}} validators = {["isPositive"]} errorMessages= {['invalid date']}/>

        </MuiPickersUtilsProvider>            
        );
    }
}

