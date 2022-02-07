import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number; // column : type

  @Column({ type: "text" }) // DB에 등록될 타입
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
}
