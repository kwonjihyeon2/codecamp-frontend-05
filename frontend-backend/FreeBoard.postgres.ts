import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
// BaseEntity : apolloserver api(insert etc) 만들기위한 기본 제공 기능

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
}

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  _id!: number;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;

  @Column({ type: "timestamp", default: new Date(), nullable: false })
  createdAt!: Date;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
}
