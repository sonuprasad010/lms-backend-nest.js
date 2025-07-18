import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { HydratedDocument, Types } from "mongoose";
import { CourseLesson, courseLessonSchema } from "./course_lesson.schema";

export type CourseDocument = HydratedDocument<Course>

@Schema()
export class Course {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image?: string;

    // Array of embedded lesson documents
    @Prop({ type: [courseLessonSchema] })
    lessons: CourseLesson[];

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    teacher: User

}

export const courseSchema = SchemaFactory.createForClass(Course);