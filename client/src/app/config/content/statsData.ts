interface Stat {
  start_label: string;
  value: string;
  end_label: string;
}

export const stats: Stat[] = [
  {
    start_label: "More than",
    value: "100+",
    end_label: " Projects",
  },
  {
    start_label: "Over",
    value: "10,000+",
    end_label: "Participants",
  },
  {
    start_label: "Reputed",
    value: "10+",
    end_label: "Institutions",
  },
];

export const terms_conditions: string = `*Note that the above statistics are based upon the participation counts of students across India in all platforms.`;
