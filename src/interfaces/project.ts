enum ProjectTypeEnum {
  Personal = "personal",
  College = "college"
}

export default interface ProjectI {
  name: string,
  category: ProjectTypeEnum | string,
  description: string,
  detail?: string,
  key_tasks?: Array<string>,
  url: string,
  file_name: string,
}