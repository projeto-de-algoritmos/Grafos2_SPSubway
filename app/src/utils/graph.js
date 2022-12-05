export const StatesGraph = () => {
    const [playersGraph, setPlayersGraph] = useState(
        [
            {
                id: "DF",
                related_states: [
                    {
                        id: "GO",
                        distance_between: 209,
                    }
                ]
            },
            {
                id: "GO",
                related_states: [
                    {
                        id: "TO",
                        distance_between: 874,
                    },
                    {
                        id: "BA",
                        distance_between: 1643,
                    },
                    {
                        id: "MG",
                        distance_between: 906,
                    },
                    {
                        id: "SP",
                        distance_between: 926,
                    },
                    {
                        id: "MS",
                        distance_between: 935,
                    },
                    {
                        id: "MT",
                        distance_between: 934,
                    }
                ]
            },
            {
                id: "TO",
                related_states: [
                    {
                        id: "PA",
                        distance_between: 1283,
                    },
                    {
                        id: "MA",
                        distance_between: 1386,
                    },
                    {
                        id: "PI",
                        distance_between: 1401,
                    },
                    {
                        id: "BA",
                        distance_between: 1454,
                    },
                    {
                        id: "GO",
                        distance_between: 874,
                    },
                    {
                        id: "MT",
                        distance_between: 1784,
                    }
                ]
            },
            {
                id: "BA",
                related_states: [
                    {
                        id: "PI",
                        distance_between: 1163,
                    },
                    {
                        id: "PE",
                        distance_between: 839,
                    },
                    {
                        id: "AL",
                        distance_between: 632,
                    },
                    {
                        id: "SE",
                        distance_between: 356,
                    },
                    {
                        id: "ES",
                        distance_between: 1202,
                    },
                    {
                        id: "MG",
                        distance_between: 1372,
                    },
                    {
                        id: "GO",
                        distance_between: 1643,
                    },
                    {
                        id: "TO",
                        distance_between: 1454,
                    },
                ]
            },
            {
                id: "MG",
                related_states: [
                    {
                        id: "ES",
                        distance_between: 524,
                    },
                    {
                        id: "RJ",
                        distance_between: 434,
                    },
                    {
                        id: "SP",
                        distance_between: 586,
                    },
                    {
                        id: "MS",
                        distance_between: 1453,
                    },
                    {
                        id: "GO",
                        distance_between: 906,
                    },
                    {
                        id: "BA",
                        distance_between: 1372,
                    },
                ]
            },
            {
                id: "SP",
                related_states: [
                    {
                        id: "MG",
                        distance_between: 586,
                    },
                    {
                        id: "RJ",
                        distance_between: 429,
                    },
                    {
                        id: "PR",
                        distance_between: 408,
                    },
                    {
                        id: "MS",
                        distance_between: 1014,
                    },
                    {
                        id: "GO",
                        distance_between: 926,
                    },
                ]
            },
            {
                id: "MS",
                related_states: [
                    {
                        id: "MT",
                        distance_between: 694,
                    },
                    {
                        id: "GO",
                        distance_between: 935,
                    },
                    {
                        id: "MG",
                        distance_between: 1453,
                    },
                    {
                        id: "SP",
                        distance_between: 1014,
                    },
                    {
                        id: "PR",
                        distance_between: 991,
                    },
                ]
            },
            {
                id: "MT",
                related_states: [
                    {
                        id: "RO",
                        distance_between: 3142,
                    },
                    {
                        id: "AM",
                        distance_between: 2357,
                    },
                    {
                        id: "PA",
                        distance_between: 2941,
                    },
                    {
                        id: "TO",
                        distance_between: 1784,
                    },
                    {
                        id: "GO",
                        distance_between: 934,
                    },
                    {
                        id: "MS",
                        distance_between: 694,
                    },
                ]
            },
            {
                id: "PA",
                related_states: [
                    {
                        id: "AP",
                        distance_between: 1914,
                    },
                    {
                        id: "MA",
                        distance_between: 806,
                    },
                    {
                        id: "TO",
                        distance_between: 1283,
                    },
                    {
                        id: "MT",
                        distance_between: 2941,
                    },
                    {
                        id: "AM",
                        distance_between: 5298,
                    },
                    {
                        id: "RR",
                        distance_between: 6083,
                    },
                ]
            },
            {
                id: "MA",
                related_states: [
                    {
                        id: "PA",
                        distance_between: 806,
                    },
                    {
                        id: "TO",
                        distance_between: 1386,
                    },
                    {
                        id: "BA",
                        distance_between: 1599,
                    },
                    {
                        id: "PI",
                        distance_between: 446,
                    },
                ]
            },
            {
                id: "PI",
                related_states: [
                    {
                        id: "CE",
                        distance_between: 634,
                    },
                    {
                        id: "PE",
                        distance_between: 1137,
                    },
                    {
                        id: "BA",
                        distance_between: 1163,
                    },
                    {
                        id: "TO",
                        distance_between: 1401,
                    },
                    {
                        id: "MA",
                        distance_between: 446,
                    },
                ]
            },
            {
                id: "PE",
                related_states: [
                    {
                        id: "PI",
                        distance_between: 1137,
                    },
                    {
                        id: "BA",
                        distance_between: 839,
                    },
                    {
                        id: "AL",
                        distance_between: 285,
                    },
                    {
                        id: "PB",
                        distance_between: 120,
                    },
                    {
                        id: "CE",
                        distance_between: 800,
                    },
                ]
            },
            {
                id: "AL",
                related_states: [
                    {
                        id: "SE",
                        distance_between: 294,
                    },
                    {
                        id: "BA",
                        distance_between: 632,
                    },
                    {
                        id: "PE",
                        distance_between: 285,
                    },
                ]
            },
            {
                id: "SE",
                related_states: [
                    {
                        id: "BA",
                        distance_between: 356,
                    },
                    {
                        id: "AL",
                        distance_between: 294,
                    },
                ]
            },
            {
                id: "ES",
                related_states: [
                    {
                        id: "BA",
                        distance_between: 1202,
                    },
                    {
                        id: "RJ",
                        distance_between: 521,
                    },
                    {
                        id: "MG",
                        distance_between: 524,
                    },
                ]
            },
            {
                id: "RJ",
                related_states: [
                    {
                        id: "SP",
                        distance_between: 429,
                    },
                    {
                        id: "MG",
                        distance_between: 434,
                    },
                    {
                        id: "ES",
                        distance_between: 521,
                    },
                ]
            },
            {
                id: "PR",
                related_states: [
                    {
                        id: "MS",
                        distance_between: 991,
                    },
                    {
                        id: "SP",
                        distance_between: 408,
                    },
                    {
                        id: "SC",
                        distance_between: 300,
                    },
                ]
            },
            {
                id: "RO",
                related_states: [
                    {
                        id: "AC",
                        distance_between: 544,
                    },
                    {
                        id: "AM",
                        distance_between: 901,
                    },
                    {
                        id: "MT",
                        distance_between: 1456,
                    },
                ]
            },
            {
                id: "AM",
                related_states: [
                    {
                        id: "AC",
                        distance_between: 1445,
                    },
                    {
                        id: "RO",
                        distance_between: 901,
                    },
                    {
                        id: "MT",
                        distance_between: 2357,
                    },
                    {
                        id: "PA",
                        distance_between: 5298,
                    },
                    {
                        id: "RR",
                        distance_between: 785,
                    },
                ]
            },
            {
                id: "RR",
                related_states: [
                    {
                        id: "PA",
                        distance_between: 6083,
                    },
                    {
                        id: "AM",
                        distance_between: 785,
                    },
                ]
            },
            {
                id: "AP",
                related_states: [
                    {
                        id: "PA",
                        distance_between: 1914,
                    }
                ]
            },
            {
                id: "CE",
                related_states: [
                    {
                        id: "PI",
                        distance_between: 634,
                    },
                    {
                        id: "PE",
                        distance_between: 800,
                    },
                    {
                        id: "RN",
                        distance_between: 537,
                    },
                    {
                        id: "PB",
                        distance_between: 688,
                    },
                ]
            },
            {
                id: "RN",
                related_states: [
                    {
                        id: "PB",
                        distance_between: 185,
                    },
                    {
                        id: "CE",
                        distance_between: 537,
                    },
                ]
            },
            {
                id: "PB",
                related_states: [
                    {
                        id: "RN",
                        distance_between: 185,
                    },
                    {
                        id: "PE",
                        distance_between: 120,
                    },
                    {
                        id: "CE",
                        distance_between: 688,
                    },
                ]
            },
            {
                id: "AC",
                related_states: [
                    {
                        id: "AM",
                        distance_between: 1445,
                    },
                    {
                        id: "RO",
                        distance_between: 544,
                    },
                ]
            },
            {
                id: "SC",
                related_states: [
                    {
                        id: "PR",
                        distance_between: 300,
                    },
                    {
                        id: "RS",
                        distance_between: 476,
                    },
                ]
            },
            {
                id: "RS",
                related_states: [
                    {
                        id: "SC",
                        distance_between: 476,
                    }
                ]
            },
        ])
}