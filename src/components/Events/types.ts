export type EventType = {
  id: string;
	img: string[];
	h: {
		h1: string;
		h2: string;
	};
	at: {
		date: string;
		location: string;
	};
	type: string;
  description: string;
  rules: string;
  others: string;
  md: string;
};

export type EventCategoryType = {
	ws: Array<EventType>;
	comp: Array<EventType>;
};
