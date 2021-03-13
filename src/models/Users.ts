import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

@Entity('users')
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassoword() {
        this.password = bcrypt.hashSync(this.password, Number(process.env.SALT));
    }

    constructor() {

        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { User };