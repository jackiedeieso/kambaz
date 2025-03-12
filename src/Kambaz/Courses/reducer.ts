import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "./../Database";

interface Enrollment {
  userId: string;
  courseId: string;
}

interface CoursesState {
  courses: any[];
  enrollments: Enrollment[];
}

const initialState: CoursesState = {
  courses: courses,
  enrollments: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      state.enrollments.push(action.payload);
    },
    unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.userId !== action.payload.userId || enrollment.courseId !== action.payload.courseId
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
