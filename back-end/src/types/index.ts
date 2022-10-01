export type UserInfo = {
  name: string;
  password: string;
  passwordConfirmation: string;
};

export type CharacterInfo = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};
