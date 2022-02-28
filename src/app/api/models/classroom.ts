import { integer } from './common'

export type CourseState =
  | 'COURSE_STATE_UNSPECIFIED'
  | 'ACTIVE'
  | 'ARCHIVED'
  | 'PROVISIONED'
  | 'DECLINED'
  | 'SUSPENDED'

export type CalculationType =
  | 'CALCULATION_TYPE_UNSPECIFIED'
  | 'TOTAL_POINTS'
  | 'WEIGHTED_CATEGORIES'

export type DisplaySetting =
  | 'DISPLAY_SETTING_UNSPECIFIED'
  | 'SHOW_OVERALL_GRADE'
  | 'HIDE_OVERALL_GRADE'
  | 'SHOW_TEACHERS_ONLY'

export type GradeCategory = {
  id: string,
  name: string,
  weight: integer,
  defaultGradeDenominator: integer
}

export type GradebookSettings = {
  calculationType: CalculationType,
  displaySetting: DisplaySetting,
  gradeCategories: GradeCategory[],
}

export type DriveFolder = {
  id: string,
  title: string,
  alternateLink: string
}

export type DriveFile = {
  id: string,
  title: string,
  alternateLink: string,
  thumbnailUrl: string
}

export type youTubeVideo = {
  id: string,
  title: string,
  alternateLink: string,
  thumbnailUrl: string
}

export type Link = {
  url: string,
  title: string,
  thumbnailUrl: string
}

export type Form = {
  formUrl: string,
  responseUrl: string,
  title: string,
  thumbnailUrl: string
}

export type CourseMaterial = {
  driveFile: DriveFile[],
  youTubeVideo: youTubeVideo[],
  link: Link[],
  form: Form[],
}

export type classroom = {
  id: string,
  name: string,
  section: string,
  descriptionHeading: string,
  description: string,
  room: string,
  ownerId: string,
  creationTime: string,
  updateTime: string,
  enrollmentCode: string,
  courseState: CourseState,
  alternateLink: string,
  teacherGroupEmail: string,
  courseGroupEmail: string,
  teacherFolder: DriveFolder[],
  courseMaterialSets: CourseMaterial[],
  guardiansEnabled: boolean,
  calendarId: string,
  gradebookSettings: GradebookSettings[],
}


