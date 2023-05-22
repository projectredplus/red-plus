export const essays = [
  {
    autor: "Adrielly",
    file: `https://drive.google.com/file/d/1QGmHLT7ThJ7i1y7tsSx51Iy8Jja4xo5J/view?usp=share_link`,
    year: "2020",
  },
  {
    autor: "Aécio",
    file: `https://drive.google.com/file/d/1jU8v-IzmcEp-YFB1YBvtwoYMnuUHz6Kj/view?usp=share_link`,
    year: "2020",
  },
  {
    autor: "Isabella",
    file: "https://drive.google.com/file/d/1tqafE3DHc_W6u1KSOUKJbLTpjU0wHek5/view?usp=share_link",
    year: "2020",
  },
  {
    autor: "Julia",
    file: "https://drive.google.com/file/d/1BfZlmFDuKg39OUsduZhi7L4Sny_RuTFq/view?usp=share_link",
    year: "2020",
  },
  {
    autor: "Raíssa",
    file: "https://drive.google.com/file/d/1WULyirI4yEvkH86vZ8w9cP5SGbAVcVin/view?usp=share_link",
    year: "2020",
  },
  {
    autor: "Clara",
    file: "https://drive.google.com/file/d/1x0cif3AnNzSC7iA5BiCqgzIbDz-L-qHw/view?usp=share_link",
    year: "2018",
  },
  {
    autor: "Lívia",
    file: "https://drive.google.com/file/d/11aLlMysoyUueKxgIjbczFsLeZp40LUaA/view?usp=share_link",
    year: "2018",
  },
  {
    autor: "Lucas",
    file: "https://drive.google.com/file/d/1Y-c65xNXV25LF1jcePU6fTEpaVZLFNPq/view?usp=share_link",
    year: "2018",
  },
  {
    autor: "Maria",
    file: "https://drive.google.com/file/d/1vzcbKIwKU5DRJiID5tlcvYT1x7O5lF0P/view?usp=share_link",
    year: "2018",
  },
  {
    autor: "Thais",
    file: "https://drive.google.com/file/d/1CBGWKq1LOMiJ9jFsiw5pMH2jRUf0f0tO/view?usp=share_link",
    year: "2018",
  },
  {
    autor: "Ana",
    file: "https://drive.google.com/file/d/1U0JipeyZCmlcN0sbpwtYdqKXm4kbRD9Z/view?usp=share_link",
    year: "2019",
  },
  {
    autor: "Alana",
    file: "https://drive.google.com/file/d/15q_GIl26oJokHrdzkaXGxaTbiuFFM2Rb/view?usp=share_link",
    year: "2019",
  },
  {
    autor: "Guilherme",
    file: "https://drive.google.com/file/d/1aJwwnPZLr8VNmKwkpLAzehkFwm_a3aq2/view?usp=share_link",
    year: "2019",
  },
  {
    autor: "Juliana",
    file: "https://drive.google.com/file/d/16ZvXfKbvwUSMjms6zsAmLhI5WewSQ_dV/view?usp=share_link",
    year: "2019",
  },
  {
    autor: "Juliana",
    file: "https://drive.google.com/file/d/16ZvXfKbvwUSMjms6zsAmLhI5WewSQ_dV/view?usp=share_link",
    year: "2019",
  },
  {
    autor: "Vinícius",
    file: "https://drive.google.com/file/d/1QY-LVt0UhvVAfRhKG4iD8L-jiQrJ4J-H/view?usp=share_link",
    year: "2019",
  },
  {
    autor: "Iasmin",
    file: "https://drive.google.com/file/d/15WI841C5HARaAaIEz76XmkX2Voq7guYC/view?usp=share_link",
    year: "2021",
  },
  {
    autor: "Rafaela",
    file: "https://drive.google.com/file/d/1yjOEzlTHfFaAjiMMpVAI7f7AWVBm7pa_/view?usp=share_link",
    year: "2021",
  },
  {
    autor: "Sarah",
    file: "https://drive.google.com/file/d/17PQbsrcML215e_Z0KggdNI7u4BBFDHvL/view?usp=share_link",
    year: "2021",
  },
  {
    autor: "Ana",
    file: "https://drive.google.com/file/d/1Vsf8W0hPJpJ4o6iH9jA7adrEpr2Ozdwk/view?usp=share_link",
    year: "2022",
  },
  {
    autor: "Evely",
    file: "https://drive.google.com/file/d/1w9A-Ug-JWXGD2jMrTH3UBTUVshWYN3Wf/view?usp=share_link",
    year: "2022",
  },
  {
    autor: "Fernanda",
    file: "https://drive.google.com/file/d/1nd2clbo1LMNIl9BV0WO3AsV_E0S9BKVN/view?usp=share_link",
    year: "2022",
  },
  {
    autor: "Giovanna",
    file: "https://drive.google.com/file/d/1vUgumyb_bCIF5-yreaykTxflLyNwj88J/view?usp=share_link",
    year: "2022",
  },
  {
    autor: "Iasmin",
    file: "https://drive.google.com/file/d/1CqH9eOmpN9jmA5ty0sIPA9aYgH_jqa1B/view?usp=share_link",
    year: "2022",
  },
];

let years = [];
essays.forEach(essay => {
  years.push(+essay.year);
  years.sort()
})

years = [...new Set(years)]

console.log(years)
export { years }