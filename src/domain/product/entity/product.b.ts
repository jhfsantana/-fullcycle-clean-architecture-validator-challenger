import Entity from "../../@share/entity/entity.abstract";
import NotificationError from "../../@share/notification/notification.error";
import ProductValidatorFactory from "../factory/product.validator.factory";
import ProductInterface from "./product.interface";

export default class ProductB extends Entity implements ProductInterface{

    _id: string = ""
    _name: string = ""
    _price: number;

    constructor(id: string, name: string, price: number) {
        super();
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    get id(): string {
        return this._id
    }
    
    get name(): string {
        return this._name
    }

    get price(): number {
        return this._price
    }

    changeName(name: string): void {
        this._name = name;
    }

    changePrice(price: number): void {
        this._price = price * 2;
    }
    validate() {
        ProductValidatorFactory.create().validate(this);

        if(this.notification.hasErrors())
            throw new NotificationError(this.notification.errors);
    }
}