import Notification from "../notification/notification";

export default abstract class Entity {

    notification: Notification;

    constructor()  {
        this.notification = new Notification();
    }
}