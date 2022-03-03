import { integer } from './common';

/* REF = 'https://developers.google.com/classroom/reference/rest' */

//Course PART
export type CourseState =
  | 'COURSE_STATE_UNSPECIFIED'
  | 'ACTIVE'
  | 'ARCHIVED'
  | 'PROVISIONED'
  | 'DECLINED'
  | 'SUSPENDED';

export type CalculationType =
  | 'CALCULATION_TYPE_UNSPECIFIED'
  | 'TOTAL_POINTS'
  | 'WEIGHTED_CATEGORIES';

export type DisplaySetting =
  | 'DISPLAY_SETTING_UNSPECIFIED'
  | 'SHOW_OVERALL_GRADE'
  | 'HIDE_OVERALL_GRADE'
  | 'SHOW_TEACHERS_ONLY';

export type GradeCategory = {
  id: string;
  name: string;
  weight: integer;
  defaultGradeDenominator: integer;
};

export type GradebookSettings = {
  calculationType: CalculationType;
  displaySetting: DisplaySetting;
  gradeCategories: GradeCategory[];
};

export type DriveFolder = {
  id: string;
  title: string;
  alternateLink: string;
};

export type DriveFile = {
  id: string;
  title: string;
  alternateLink: string;
  thumbnailUrl: string;
};

export type youTubeVideo = {
  id: string;
  title: string;
  alternateLink: string;
  thumbnailUrl: string;
};

export type Link = {
  url: string;
  title: string;
  thumbnailUrl: string;
};

export type Form = {
  formUrl: string;
  responseUrl: string;
  title: string;
  thumbnailUrl: string;
};

export type CourseMaterial = {
  driveFile: DriveFile;
  youTubeVideo: youTubeVideo;
  link: Link;
  form: Form;
};

export type CourseMaterialSet = {
  title: string,
  materials: CourseMaterial[],
}

export type Classroom = {
  id: string;
  name: string;
  section: string;
  descriptionHeading: string;
  description: string;
  room: string;
  ownerId: string;
  creationTime: string;
  updateTime: string;
  enrollmentCode: string;
  courseState: CourseState;
  alternateLink: string;
  teacherGroupEmail: string;
  courseGroupEmail: string;
  teacherFolder: DriveFolder;
  courseMaterialSets: CourseMaterialSet[];
  guardiansEnabled: boolean;
  calendarId: string;
  gradebookSettings: GradebookSettings[];
};

export type coursesList = {
  courses: Classroom[];
  nextPageToken: string;
};

//Teacher PART
export type Permission =
  | 'PERMISSION_UNSPECIFIED'
  | 'CREATE_COURSE';

export type GlobalPermission = {
  permission: Permission;
}

export type Permissions = {
  GlobalPermission: GlobalPermission;
}

export type Name = {
  givenName: string,
  familyName: string,
  fullName: string,
}

export type Profile = {
  id: string,
  name: Name,
  emailAddress: string,
  photoUrl: string,
  permissions: Permissions[],
  verifiedTeacher: boolean,
}

export type CourseTeacher = {
  courseId: string,
  userId: string,
  profile: Profile,
}

export type CourseTeacherList = {
  teachers: CourseTeacher[],
  nextPageToken: string,
}

// parse function //

//course
export function parseDriveFolder(data: any): DriveFolder {
  return { ...data };
}

export function parseCourseMaterialSet(data: any): CourseMaterialSet {
  return { ...data };
}

export function parseGradebookSettings(data: any): GradebookSettings {
  return { ...data };
}

export function parseDriveFile(data: any): DriveFile {
  return { ...data };
}

export function parseyouTubeVideo(data: any): youTubeVideo {
  return { ...data };
}

export function parseLink(data: any): Link {
  return { ...data };
}

export function parseForm(data: any): Form {
  return { ...data };
}

export function parseClassroom(data: any): Classroom {
  return {
    ...data,
    courseMaterialSets: (data?.CourseMaterialSet || []).map((data:any)=>parseCourseMaterialSet(data)),
    gradebookSettings: (data?.GradebookSettings || []).map((data:any)=>parseGradebookSettings(data)),
  };
}

export function parseCoursesList(data: any): coursesList {
  return {
    ...data,
    courses: (data?.courses || []).map((data: any) => parseClassroom(data)),
  };
}

//teacher
export function parsePermissions(data:any): Permissions {
  return {...data,
    GlobalPermission: parseGlobalPermission(data?.GlobalPermission)
  }
}

export function parseGlobalPermission(data:any): GlobalPermission{
  return {...data,
    permission: parsePermissions(data?.permission)
  }
}

export function parseName(data:any): Name {
  return {...data}
}

export function parseProfile(data:any): Profile {
  return {...data,
  name: parseName(data?.name)
  }
}

export function parseTeacher(data:any): CourseTeacher {
  return {...data,
    profile: parseProfile(data?.profile || [])
  }
}

export function parseTeacherList(data:any): CourseTeacherList {
  console.log(data)
  return {...data,
    teachers: (data?.teachers || []).map((data:any) => parseTeacher(data)),
  }
}
