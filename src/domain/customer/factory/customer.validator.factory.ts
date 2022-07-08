
import { ValidatorInterface } from "../../@share/validator/validator.interface";
import Customer from "../entity/customer";
import CustomerYupValodator from "../validator/customer.yup.validator";


export default class CustomerValidatorFactory {

    static create(): ValidatorInterface<Customer> {
        return new CustomerYupValodator();
    }
}