import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, BaseEntity } from "typeorm";
import Apartment from "./apartment";

@Entity()
class Image extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, default: "Error"})
    path: string;
	
	@ManyToOne(() => Apartment, apartment => apartment.images)
	parent: Apartment;
}

export default Image;