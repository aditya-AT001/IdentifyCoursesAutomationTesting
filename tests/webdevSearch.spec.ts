import {test,BrowserContext} from "@playwright/test";
import { HomePage } from "../pages/Homepage";
import { CourseList } from "../pages/WebCoursePage";
import { FirstCourse } from "../pages/FirstCourseDetails";
import { SecondCourse } from "../pages/SecondCourseDetails";

test("webCourse Search",async({page,context})=>{
    const homePage=new HomePage(page);
   await  homePage.goTo();
   await  homePage.webCourse();
   const courseList=new CourseList(page);
   await courseList.filterLanandLevel();

   const firstCourse=new FirstCourse(page);
   await firstCourse.courseOne(context);

   const secondCourse=new SecondCourse(page);
   await secondCourse.secondCourse(context);




   //await courseList.courseOne(context);
   //await courseList.courseSecond(context);
})