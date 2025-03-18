// TODO: Create an interface for the Candidate objects returned by the API

// Used readonly to prevent the user from changing the value of the properties
// Used null to prevent the user from changing the value of the properties to undefined
// Used ? to make the properties optional
// Used | to make the properties either a string or null
export default interface Candidate {
  readonly avatar_url: string | null;
  readonly name: string | null;
  readonly login: string | null; 
  readonly location: string | null;
  readonly email: string | null;
  readonly company: string | null;
  readonly html_url: string | null; 
  readonly bio: string | null;
  readonly public_repos: number | null;
}

