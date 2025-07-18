import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { CourseLesson } from "./course_lesson.schema";

export type CourseTestDocument = HydratedDocument<CourseTest>;

@Schema()
export class TestQuestion {
  @Prop({ required: true })
  question: string;

  @Prop({ type: [String], required: true })
  options: string[];

  @Prop({ required: true })
  correctAnswer: number; // Index of the correct answer in options array
}

@Schema()
export class CourseTest {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'CourseLesson', required: true })
  lesson: CourseLesson;

  @Prop({ type: [TestQuestion], required: true })
  testQuestions: TestQuestion[];
}

export const courseTestSchema = SchemaFactory.createForClass(CourseTest);