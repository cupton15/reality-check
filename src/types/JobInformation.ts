export default interface JobInformation {
  salary: number;
  type: 'FullTime' | 'PartTime';
  ageRange: 'all' | '18-21' | '22-30' | '31-39' | '40-49' | '50-59' | '60+';
}
