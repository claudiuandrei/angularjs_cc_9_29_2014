'use strict';

/**
 * @ngdoc service
 * @name ccApp.teamData
 * @description
 * # teamData
 * Factory in the ccApp.
 */
angular.module('ccApp')
  .factory('teamData', function () {
    // Service logic
    // ...

    var data = {"2014090801": {
        "home": {
            "score": {
                "1": 0,
                "2": 6,
                "3": 0,
                "4": 12,
                "5": 0,
                "T": 18
            },
            "abbr": "ARI",
            "to": 2,
            "stats": {
                "passing": {
                    "00-0021429": {
                        "name": "C.Palmer",
                        "att": 37,
                        "cmp": 24,
                        "yds": 304,
                        "tds": 2,
                        "ints": 0,
                        "twopta": 1,
                        "twoptm": 0
                    }
                },
                "rushing": {
                    "00-0030287": {
                        "name": "A.Ellington",
                        "att": 13,
                        "yds": 53,
                        "tds": 0,
                        "lng": 18,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0021429": {
                        "name": "C.Palmer",
                        "att": 4,
                        "yds": 29,
                        "tds": 0,
                        "lng": 12,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0027786": {
                        "name": "J.Dwyer",
                        "att": 7,
                        "yds": 20,
                        "tds": 0,
                        "lng": 7,
                        "lngtd": 0,
                        "twopta": 1,
                        "twoptm": 0
                    },
                    "00-0030282": {
                        "name": "S.Taylor",
                        "att": 1,
                        "yds": 5,
                        "tds": 0,
                        "lng": 5,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0029638": {
                        "name": "M.Floyd",
                        "att": 1,
                        "yds": 2,
                        "tds": 0,
                        "lng": 2,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    }
                },
                "receiving": {
                    "00-0029638": {
                        "name": "M.Floyd",
                        "rec": 5,
                        "yds": 119,
                        "tds": 0,
                        "lng": 63,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0030287": {
                        "name": "A.Ellington",
                        "rec": 5,
                        "yds": 27,
                        "tds": 0,
                        "lng": 11,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0030282": {
                        "name": "S.Taylor",
                        "rec": 3,
                        "yds": 21,
                        "tds": 1,
                        "lng": 11,
                        "lngtd": 5,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0031051": {
                        "name": "Jo. Brown",
                        "rec": 2,
                        "yds": 29,
                        "tds": 1,
                        "lng": 16,
                        "lngtd": 13,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0025396": {
                        "name": "T.Ginn",
                        "rec": 2,
                        "yds": 29,
                        "tds": 0,
                        "lng": 25,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0027786": {
                        "name": "J.Dwyer",
                        "rec": 2,
                        "yds": 8,
                        "tds": 0,
                        "lng": 5,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0022921": {
                        "name": "L.Fitzgerald",
                        "rec": 1,
                        "yds": 22,
                        "tds": 0,
                        "lng": 22,
                        "lngtd": 0,
                        "twopta": 1,
                        "twoptm": 0
                    },
                    "00-0026178": {
                        "name": "J.Carlson",
                        "rec": 1,
                        "yds": 20,
                        "tds": 0,
                        "lng": 20,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0028007": {
                        "name": "R.Housler",
                        "rec": 1,
                        "yds": 16,
                        "tds": 0,
                        "lng": 16,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0028345": {
                        "name": "R.Hughes",
                        "rec": 1,
                        "yds": 7,
                        "tds": 0,
                        "lng": 7,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0030300": {
                        "name": "Ja. Brown",
                        "rec": 1,
                        "yds": 6,
                        "tds": 0,
                        "lng": 6,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    }
                },
                "fumbles": {
                    "00-0030287": {
                        "name": "A.Ellington",
                        "tot": 1,
                        "rcv": 0,
                        "trcv": 0,
                        "yds": 0,
                        "lost": 1
                    },
                    "00-0021429": {
                        "name": "C.Palmer",
                        "tot": 1,
                        "rcv": 0,
                        "trcv": 0,
                        "yds": 0,
                        "lost": 1
                    }
                },
                "kicking": {
                    "00-0030896": {
                        "name": "C.Catanzaro",
                        "fgm": 2,
                        "fga": 2,
                        "fgyds": 44,
                        "totpfg": 6,
                        "xpmade": 0,
                        "xpmissed": 0,
                        "xpa": 0,
                        "xpb": 0,
                        "xptot": 0
                    }
                },
                "punting": {
                    "00-0028952": {
                        "name": "D.Butler",
                        "pts": 4,
                        "yds": 218,
                        "avg": 32,
                        "i20": 0,
                        "lng": 61
                    }
                },
                "kickret": {
                    "00-0025396": {
                        "name": "T.Ginn",
                        "ret": 3,
                        "avg": 16,
                        "tds": 0,
                        "lng": 21,
                        "lngtd": 0
                    }
                },
                "puntret": {},
                "defense": {
                    "00-0021246": {
                        "name": "L.Foote",
                        "tkl": 8,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0030294": {
                        "name": "T.Jefferson",
                        "tkl": 7,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027067": {
                        "name": "R.Johnson",
                        "tkl": 4,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0031366": {
                        "name": "D.Bucannon",
                        "tkl": 4,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0030382": {
                        "name": "K.Minter",
                        "tkl": 3,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0024234": {
                        "name": "A.Cromartie",
                        "tkl": 2,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0022539": {
                        "name": "T.Kelly",
                        "tkl": 2,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027064": {
                        "name": "J.Powers",
                        "tkl": 2,
                        "ast": 0,
                        "sk": 0,
                        "int": 1,
                        "ffum": 0
                    },
                    "00-0027877": {
                        "name": "D.Williams",
                        "tkl": 2,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027045": {
                        "name": "M.Shaughnessy",
                        "tkl": 2,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0028041": {
                        "name": "S.Acho",
                        "tkl": 2,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0028742": {
                        "name": "T.Keiser",
                        "tkl": 1,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027943": {
                        "name": "P.Peterson",
                        "tkl": 1,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0031265": {
                        "name": "E.Stinson",
                        "tkl": 0,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    }
                },
                "team": {
                    "totfd": 22,
                    "totyds": 403,
                    "pyds": 294,
                    "ryds": 109,
                    "pen": 5,
                    "penyds": 23,
                    "trnovr": 2,
                    "pt": 5,
                    "ptyds": 218,
                    "ptavg": 27,
                    "top": "31:49"
                }
            },
            "players": null
        },
        "away": {
            "score": {
                "1": 0,
                "2": 3,
                "3": 14,
                "4": 0,
                "5": 0,
                "T": 17
            },
            "abbr": "SD",
            "to": 0,
            "stats": {
                "passing": {
                    "00-0022942": {
                        "name": "P.Rivers",
                        "att": 36,
                        "cmp": 21,
                        "yds": 238,
                        "tds": 1,
                        "ints": 1,
                        "twopta": 0,
                        "twoptm": 0
                    }
                },
                "rushing": {
                    "00-0027864": {
                        "name": "R.Mathews",
                        "att": 12,
                        "yds": 40,
                        "tds": 1,
                        "lng": 20,
                        "lngtd": 20,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0022942": {
                        "name": "P.Rivers",
                        "att": 2,
                        "yds": 10,
                        "tds": 0,
                        "lng": 10,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0026019": {
                        "name": "D.Woodhead",
                        "att": 6,
                        "yds": 5,
                        "tds": 0,
                        "lng": 5,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0026182": {
                        "name": "E.Royal",
                        "att": 2,
                        "yds": -1,
                        "tds": 0,
                        "lng": 2,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0027003": {
                        "name": "D.Brown",
                        "att": 2,
                        "yds": -2,
                        "tds": 0,
                        "lng": 2,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    }
                },
                "receiving": {
                    "00-0021547": {
                        "name": "A.Gates",
                        "rec": 6,
                        "yds": 81,
                        "tds": 0,
                        "lng": 34,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0030279": {
                        "name": "K.Allen",
                        "rec": 5,
                        "yds": 37,
                        "tds": 0,
                        "lng": 12,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0022414": {
                        "name": "M.Floyd",
                        "rec": 4,
                        "yds": 50,
                        "tds": 1,
                        "lng": 32,
                        "lngtd": 6,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0029275": {
                        "name": "L.Green",
                        "rec": 2,
                        "yds": 24,
                        "tds": 0,
                        "lng": 20,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0027864": {
                        "name": "R.Mathews",
                        "rec": 2,
                        "yds": 20,
                        "tds": 0,
                        "lng": 12,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0026182": {
                        "name": "E.Royal",
                        "rec": 1,
                        "yds": 20,
                        "tds": 0,
                        "lng": 20,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    },
                    "00-0026019": {
                        "name": "D.Woodhead",
                        "rec": 1,
                        "yds": 6,
                        "tds": 0,
                        "lng": 6,
                        "lngtd": 0,
                        "twopta": 0,
                        "twoptm": 0
                    }
                },
                "fumbles": {
                    "00-0022942": {
                        "name": "P.Rivers",
                        "tot": 1,
                        "rcv": 1,
                        "trcv": 1,
                        "yds": -14,
                        "lost": 0
                    },
                    "00-0027682": {
                        "name": "D.Butler",
                        "tot": 0,
                        "rcv": 0,
                        "trcv": 1,
                        "yds": 0,
                        "lost": 0
                    },
                    "00-0021146": {
                        "name": "D.Freeney",
                        "tot": 0,
                        "rcv": 0,
                        "trcv": 1,
                        "yds": 0,
                        "lost": 0
                    }
                },
                "kicking": {
                    "00-0023096": {
                        "name": "N.Novak",
                        "fgm": 1,
                        "fga": 1,
                        "fgyds": 36,
                        "totpfg": 3,
                        "xpmade": 2,
                        "xpmissed": 0,
                        "xpa": 2,
                        "xpb": 0,
                        "xptot": 2
                    }
                },
                "punting": {
                    "00-0022017": {
                        "name": "M.Scifres",
                        "pts": 6,
                        "yds": 236,
                        "avg": 36,
                        "i20": 2,
                        "lng": 52
                    }
                },
                "kickret": {},
                "puntret": {
                    "00-0026182": {
                        "name": "E.Royal",
                        "ret": 2,
                        "avg": 8,
                        "tds": 0,
                        "lng": 12,
                        "lngtd": 0
                    }
                },
                "defense": {
                    "00-0028027": {
                        "name": "S.Wright",
                        "tkl": 8,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0026175": {
                        "name": "B.Flowers",
                        "tkl": 6,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0030278": {
                        "name": "M.Te'o",
                        "tkl": 6,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027956": {
                        "name": "C.Liuget",
                        "tkl": 4,
                        "ast": 1,
                        "sk": 1,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0025424": {
                        "name": "E.Weddle",
                        "tkl": 3,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0031334": {
                        "name": "J.Verrett",
                        "tkl": 3,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0031258": {
                        "name": "J.Attaochu",
                        "tkl": 3,
                        "ast": 0,
                        "sk": 1,
                        "int": 0,
                        "ffum": 1
                    },
                    "00-0029249": {
                        "name": "M.Ingram",
                        "tkl": 2,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027988": {
                        "name": "M.Gilchrist",
                        "tkl": 2,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 1
                    },
                    "00-0022139": {
                        "name": "J.Johnson",
                        "tkl": 2,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0024273": {
                        "name": "R.Marshall",
                        "tkl": 2,
                        "ast": 1,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027682": {
                        "name": "D.Butler",
                        "tkl": 2,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0030921": {
                        "name": "T.Palepoi",
                        "tkl": 1,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0027826": {
                        "name": "S.Lissemore",
                        "tkl": 1,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    },
                    "00-0029256": {
                        "name": "K.Reyes",
                        "tkl": 1,
                        "ast": 0,
                        "sk": 0,
                        "int": 0,
                        "ffum": 0
                    }
                },
                "team": {
                    "totfd": 15,
                    "totyds": 290,
                    "pyds": 238,
                    "ryds": 52,
                    "pen": 6,
                    "penyds": 47,
                    "trnovr": 1,
                    "pt": 6,
                    "ptyds": 236,
                    "ptavg": 36,
                    "top": "28:11"
                }
            },
            "players": null
        },
        "drives": {
            "1": {
                "posteam": "ARI",
                "qtr": 1,
                "redzone": true,
                "plays": {
                    "36": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 0,
                        "time": "15:00",
                        "yrdln": "SD 35",
                        "ydstogo": 0,
                        "ydsnet": 20,
                        "posteam": "SD",
                        "desc": "N.Novak kicks 71 yards from SD 35 to ARI -6. T.Ginn to ARI 15 for 21 yards (S.Ajirotutu).",
                        "note": "KICKOFF",
                        "players": {
                            "00-0027581": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "S.Ajirotutu",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0025396": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 45,
                                    "yards": 21
                                }
                            ],
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 43,
                                    "yards": 71
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 42,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "58": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "14:56",
                        "yrdln": "ARI 15",
                        "ydstogo": 10,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "(14:56) A.Ellington up the middle to ARI 15 for no gain (C.Liuget).",
                        "note": null,
                        "players": {
                            "00-0027956": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "79": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "14:22",
                        "yrdln": "ARI 15",
                        "ydstogo": 10,
                        "ydsnet": 5,
                        "posteam": "ARI",
                        "desc": "(14:22) C.Palmer pass short left to J.Dwyer pushed ob at ARI 20 for 5 yards (B.Flowers).",
                        "note": null,
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 21,
                                    "yards": 5
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 113,
                                    "yards": 9
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 5
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": -4
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "108": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "13:38",
                        "yrdln": "ARI 20",
                        "ydstogo": 5,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "(13:38) (Shotgun) PENALTY on ARI-C.Palmer, Delay of Game, 5 yards, enforced at ARI 20 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "131": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "13:23",
                        "yrdln": "ARI 15",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "ARI",
                        "desc": "(13:23) (Shotgun) C.Palmer pass deep right to J.Carlson to ARI 35 for 20 yards (S.Wright).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0026178": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "J.Carlson",
                                    "statId": 21,
                                    "yards": 20
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "J.Carlson",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "J.Carlson",
                                    "statId": 113,
                                    "yards": 2
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 20
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 18
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 8,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "155": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "12:46",
                        "yrdln": "ARI 35",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "ARI",
                        "desc": "(12:46) C.Palmer pass incomplete short right to Jo. Brown.",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 3
                                }
                            ],
                            "00-0031051": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "177": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "12:43",
                        "yrdln": "ARI 35",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "ARI",
                        "desc": "(12:43) C.Palmer pass incomplete deep middle to T.Ginn [C.Liuget].",
                        "note": null,
                        "players": {
                            "00-0027956": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 110,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 55
                                }
                            ],
                            "00-0025396": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "199": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "12:36",
                        "yrdln": "ARI 35",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "ARI",
                        "desc": "(12:36) (Shotgun) C.Palmer pass incomplete short left to M.Floyd (E.Weddle).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0025424": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "E.Weddle",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 11
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "221": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 4,
                        "time": "12:31",
                        "yrdln": "ARI 35",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "ARI",
                        "desc": "(12:31) D.Butler punts 55 yards to SD 10, Center-M.Leach. E.Royal pushed ob at SD 22 for 12 yards (D.Bucannon).",
                        "note": "PUNT",
                        "players": {
                            "00-0028952": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "D.Butler",
                                    "statId": 29,
                                    "yards": 55
                                }
                            ],
                            "00-0031366": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 33,
                                    "yards": 12
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Punt",
                "penyds": -5,
                "ydsgained": 25,
                "numplays": 9,
                "postime": "2:40",
                "start": {
                    "qtr": 1,
                    "time": "15:00",
                    "yrdln": "ARI 15",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 1,
                    "time": "12:20",
                    "yrdln": "ARI 35",
                    "team": "ARI"
                }
            },
            "2": {
                "posteam": "SD",
                "qtr": 1,
                "redzone": true,
                "plays": {
                    "263": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "12:20",
                        "yrdln": "SD 22",
                        "ydstogo": 10,
                        "ydsnet": 0,
                        "posteam": "SD",
                        "desc": "(12:20) (Shotgun) R.Mathews right tackle to SD 22 for no gain (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "284": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "11:38",
                        "yrdln": "SD 22",
                        "ydstogo": 10,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(11:38) (Shotgun) P.Rivers pass short middle to A.Gates to SD 28 for 6 yards (D.Bucannon).",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 21,
                                    "yards": 6
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 113,
                                    "yards": 2
                                }
                            ],
                            "00-0031366": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 6
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "308": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "10:54",
                        "yrdln": "SD 28",
                        "ydstogo": 4,
                        "ydsnet": 18,
                        "posteam": "SD",
                        "desc": "(10:54) (Shotgun) P.Rivers pass short middle to A.Gates to SD 40 for 12 yards (T.Jefferson).",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 21,
                                    "yards": 12
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 113,
                                    "yards": 2
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 12
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 10
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 8,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "332": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "10:28",
                        "yrdln": "SD 40",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "SD",
                        "desc": "(10:28) (Shotgun) D.Brown up the middle to SD 42 for 2 yards (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027003": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Brown",
                                    "statId": 10,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "353": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "09:46",
                        "yrdln": "SD 42",
                        "ydstogo": 8,
                        "ydsnet": 15,
                        "posteam": "SD",
                        "desc": "(9:46) (No Huddle, Shotgun) PENALTY on SD-J.Troutman, False Start, 5 yards, enforced at SD 42 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0029288": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "J.Troutman",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "376": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "09:29",
                        "yrdln": "SD 37",
                        "ydstogo": 13,
                        "ydsnet": 18,
                        "posteam": "SD",
                        "desc": "(9:29) (Shotgun) P.Rivers pass short middle to K.Allen to SD 40 for 3 yards (D.Bucannon).",
                        "note": null,
                        "players": {
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 21,
                                    "yards": 3
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0031366": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 3
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ]
                        }
                    },
                    "400": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "08:44",
                        "yrdln": "SD 40",
                        "ydstogo": 10,
                        "ydsnet": 18,
                        "posteam": "SD",
                        "desc": "(8:44) (Shotgun) P.Rivers pass incomplete deep right to A.Gates (J.Powers). Arizona challenged the incomplete pass ruling, and the play was Upheld. The ruling on the field was confirmed. (Timeout #1.)",
                        "note": "TIMEOUT",
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0027064": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "J.Powers",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 16
                                }
                            ]
                        }
                    },
                    "468": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 4,
                        "time": "08:39",
                        "yrdln": "SD 40",
                        "ydstogo": 10,
                        "ydsnet": 18,
                        "posteam": "SD",
                        "desc": "(8:39) M.Scifres punts 52 yards to ARI 8, Center-M.Windt, fair catch by T.Ginn.",
                        "note": "PUNT",
                        "players": {
                            "00-0025396": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 39,
                                    "yards": 0
                                }
                            ],
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 29,
                                    "yards": 52
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 30,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Punt",
                "penyds": -5,
                "ydsgained": 23,
                "numplays": 8,
                "postime": "3:48",
                "start": {
                    "qtr": 1,
                    "time": "12:20",
                    "yrdln": "SD 22",
                    "team": "SD"
                },
                "end": {
                    "qtr": 1,
                    "time": "08:32",
                    "yrdln": "SD 40",
                    "team": "SD"
                }
            },
            "3": {
                "posteam": "ARI",
                "qtr": 1,
                "redzone": true,
                "plays": {
                    "488": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "08:32",
                        "yrdln": "ARI 8",
                        "ydstogo": 10,
                        "ydsnet": -4,
                        "posteam": "ARI",
                        "desc": "(8:32) (Shotgun) PENALTY on ARI-J.Veldheer, False Start, 4 yards, enforced at ARI 8 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0027674": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Veldheer",
                                    "statId": 93,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "526": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "08:32",
                        "yrdln": "ARI 4",
                        "ydstogo": 14,
                        "ydsnet": 59,
                        "posteam": "ARI",
                        "desc": "(8:32) (Shotgun) C.Palmer pass deep middle to M.Floyd to SD 33 for 63 yards (S.Wright).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 63
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 44
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 63
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 19
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "550": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "07:47",
                        "yrdln": "SD 33",
                        "ydstogo": 10,
                        "ydsnet": 64,
                        "posteam": "ARI",
                        "desc": "(7:47) A.Ellington up the middle to SD 28 for 5 yards (M.Ingram).",
                        "note": null,
                        "players": {
                            "00-0029249": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Ingram",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "571": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "07:05",
                        "yrdln": "SD 28",
                        "ydstogo": 5,
                        "ydsnet": 64,
                        "posteam": "ARI",
                        "desc": "(7:05) A.Ellington right tackle to SD 25 for 3 yards (M.Gilchrist). FUMBLES (M.Gilchrist), recovered by ARI-B.Massie at SD 28. B.Massie to SD 28 for no gain (D.Butler). San Diego challenged the loose ball recovery ruling, and the play was REVERSED. A.Ellington right tackle to SD 25 for 3 yards (M.Gilchrist). FUMBLES (M.Gilchrist), RECOVERED by SD-D.Butler at SD 28. D.Butler to SD 28 for no gain (B.Massie).",
                        "note": "FUMBLE",
                        "players": {
                            "00-0027682": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "D.Butler",
                                    "statId": 59,
                                    "yards": 0
                                }
                            ],
                            "00-0029528": [
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "B.Massie",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027988": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Gilchrist",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "M.Gilchrist",
                                    "statId": 91,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 52,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 106,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Fumble",
                "penyds": -4,
                "ydsgained": 68,
                "numplays": 4,
                "postime": "1:35",
                "start": {
                    "qtr": 1,
                    "time": "08:32",
                    "yrdln": "ARI 8",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 1,
                    "time": "06:57",
                    "yrdln": "SD 28",
                    "team": "ARI"
                }
            },
            "4": {
                "posteam": "SD",
                "qtr": 1,
                "redzone": true,
                "plays": {
                    "640": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "06:57",
                        "yrdln": "SD 28",
                        "ydstogo": 10,
                        "ydsnet": 4,
                        "posteam": "SD",
                        "desc": "(6:57) R.Mathews up the middle to SD 32 for 4 yards (T.Kelly).",
                        "note": null,
                        "players": {
                            "00-0022539": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Kelly",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "662": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "06:12",
                        "yrdln": "SD 32",
                        "ydstogo": 6,
                        "ydsnet": 4,
                        "posteam": "SD",
                        "desc": "(6:12) (Shotgun) P.Rivers pass incomplete deep right to K.Allen [C.Campbell].",
                        "note": null,
                        "players": {
                            "00-0026190": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Campbell",
                                    "statId": 110,
                                    "yards": 0
                                }
                            ],
                            "00-0030279": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 40
                                }
                            ]
                        }
                    },
                    "684": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "06:05",
                        "yrdln": "SD 32",
                        "ydstogo": 6,
                        "ydsnet": 24,
                        "posteam": "SD",
                        "desc": "(6:05) (Shotgun) P.Rivers pass short left to E.Royal pushed ob at ARI 48 for 20 yards (R.Johnson).",
                        "note": null,
                        "players": {
                            "00-0027067": [
                                {
                                    "sequence": 8,
                                    "clubcode": "ARI",
                                    "playerName": "R.Johnson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 20
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 14
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 21,
                                    "yards": 20
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 113,
                                    "yards": 6
                                }
                            ]
                        }
                    },
                    "708": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "05:41",
                        "yrdln": "ARI 48",
                        "ydstogo": 10,
                        "ydsnet": 29,
                        "posteam": "SD",
                        "desc": "(5:41) (Shotgun) P.Rivers pass short left to M.Floyd to ARI 43 for 5 yards (A.Cromartie).",
                        "note": null,
                        "players": {
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 5
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 5
                                }
                            ],
                            "00-0024234": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "A.Cromartie",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022414": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 5
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "732": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "05:06",
                        "yrdln": "ARI 43",
                        "ydstogo": 5,
                        "ydsnet": 25,
                        "posteam": "SD",
                        "desc": "(5:06) R.Mathews right tackle to ARI 47 for -4 yards (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 402,
                                    "yards": 4
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -4
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": -4
                                }
                            ]
                        }
                    },
                    "753": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "04:23",
                        "yrdln": "ARI 47",
                        "ydstogo": 9,
                        "ydsnet": 25,
                        "posteam": "SD",
                        "desc": "(4:23) (Shotgun) P.Rivers pass incomplete short left to E.Royal.",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 2
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "775": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 4,
                        "time": "04:18",
                        "yrdln": "ARI 47",
                        "ydstogo": 9,
                        "ydsnet": 25,
                        "posteam": "SD",
                        "desc": "(4:18) M.Scifres punts 47 yards to end zone, Center-M.Windt, Touchback.",
                        "note": "PUNT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 40,
                                    "yards": 0
                                }
                            ],
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 32,
                                    "yards": 47
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Punt",
                "penyds": 0,
                "ydsgained": 25,
                "numplays": 7,
                "postime": "2:49",
                "start": {
                    "qtr": 1,
                    "time": "06:57",
                    "yrdln": "SD 28",
                    "team": "SD"
                },
                "end": {
                    "qtr": 1,
                    "time": "04:08",
                    "yrdln": "ARI 47",
                    "team": "SD"
                }
            },
            "5": {
                "posteam": "ARI",
                "qtr": 1,
                "redzone": true,
                "plays": {
                    "809": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "04:08",
                        "yrdln": "ARI 20",
                        "ydstogo": 10,
                        "ydsnet": 16,
                        "posteam": "ARI",
                        "desc": "(4:08) C.Palmer pass deep right to Jo. Brown pushed ob at ARI 36 for 16 yards (J.Verrett).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0031334": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "J.Verrett",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 16
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 16
                                }
                            ],
                            "00-0031051": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 21,
                                    "yards": 16
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "833": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "03:37",
                        "yrdln": "ARI 36",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "ARI",
                        "desc": "(3:37) J.Dwyer up the middle to ARI 40 for 4 yards (E.Weddle).",
                        "note": null,
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 4
                                }
                            ],
                            "00-0025424": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "E.Weddle",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "854": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "03:00",
                        "yrdln": "ARI 40",
                        "ydstogo": 6,
                        "ydsnet": 22,
                        "posteam": "ARI",
                        "desc": "(3:00) M.Floyd left end to ARI 42 for 2 yards (S.Wright).",
                        "note": null,
                        "players": {
                            "00-0029638": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 10,
                                    "yards": 2
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "882": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "02:16",
                        "yrdln": "ARI 42",
                        "ydstogo": 4,
                        "ydsnet": 27,
                        "posteam": "ARI",
                        "desc": "(2:16) (Shotgun) C.Palmer pass incomplete short left to T.Ginn. PENALTY on SD-M.Gilchrist, Defensive Holding, 5 yards, enforced at ARI 42 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 5,
                                    "yards": 0
                                }
                            ],
                            "00-0027988": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Gilchrist",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "915": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "02:12",
                        "yrdln": "ARI 47",
                        "ydstogo": 10,
                        "ydsnet": 27,
                        "posteam": "ARI",
                        "desc": "(2:12) (Shotgun) C.Palmer pass incomplete short right to R.Housler (E.Weddle).",
                        "note": null,
                        "players": {
                            "00-0028007": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "R.Housler",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0025424": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "E.Weddle",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 15
                                }
                            ]
                        }
                    },
                    "937": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "02:03",
                        "yrdln": "ARI 47",
                        "ydstogo": 10,
                        "ydsnet": 27,
                        "posteam": "ARI",
                        "desc": "(2:03) (Shotgun) C.Palmer pass incomplete short left to Jo. Brown (J.Verrett).",
                        "note": null,
                        "players": {
                            "00-0031334": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "J.Verrett",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 11
                                }
                            ],
                            "00-0031051": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "959": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "01:56",
                        "yrdln": "ARI 47",
                        "ydstogo": 10,
                        "ydsnet": 27,
                        "posteam": "ARI",
                        "desc": "(1:56) (Shotgun) C.Palmer pass incomplete deep right to M.Floyd.",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 33
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "981": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 4,
                        "time": "01:51",
                        "yrdln": "ARI 47",
                        "ydstogo": 10,
                        "ydsnet": 27,
                        "posteam": "ARI",
                        "desc": "(1:51) D.Butler punts 53 yards to end zone, Center-M.Leach, Touchback.",
                        "note": "PUNT",
                        "players": {
                            "00-0028952": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "D.Butler",
                                    "statId": 32,
                                    "yards": 53
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 40,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 2,
                "result": "Punt",
                "penyds": 5,
                "ydsgained": 22,
                "numplays": 8,
                "postime": "2:27",
                "start": {
                    "qtr": 1,
                    "time": "04:08",
                    "yrdln": "ARI 20",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 1,
                    "time": "01:41",
                    "yrdln": "ARI 47",
                    "team": "ARI"
                }
            },
            "6": {
                "posteam": "SD",
                "qtr": 1,
                "redzone": true,
                "plays": {
                    "1016": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "01:41",
                        "yrdln": "SD 20",
                        "ydstogo": 10,
                        "ydsnet": 5,
                        "posteam": "SD",
                        "desc": "(1:41) (Shotgun) D.Woodhead up the middle to SD 25 for 5 yards (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 10,
                                    "yards": 5
                                }
                            ],
                            "00-0021246": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1037": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 2,
                        "time": "01:06",
                        "yrdln": "SD 25",
                        "ydstogo": 5,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(1:06) D.Woodhead right tackle to SD 26 for 1 yard (D.Williams).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ],
                            "00-0027877": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "D.Williams",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1058": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 3,
                        "time": "00:22",
                        "yrdln": "SD 26",
                        "ydstogo": 4,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(:22) (Shotgun) P.Rivers pass incomplete short left to E.Royal.",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 5
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1080": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 4,
                        "time": "00:18",
                        "yrdln": "SD 26",
                        "ydstogo": 4,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(:18) M.Scifres punts 40 yards to ARI 34, Center-M.Windt, fair catch by T.Ginn.",
                        "note": "PUNT",
                        "players": {
                            "00-0025396": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 39,
                                    "yards": 0
                                }
                            ],
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 29,
                                    "yards": 40
                                }
                            ]
                        }
                    }
                },
                "fds": 0,
                "result": "Punt",
                "penyds": 0,
                "ydsgained": 6,
                "numplays": 4,
                "postime": "1:31",
                "start": {
                    "qtr": 1,
                    "time": "01:41",
                    "yrdln": "SD 20",
                    "team": "SD"
                },
                "end": {
                    "qtr": 1,
                    "time": "00:10",
                    "yrdln": "SD 26",
                    "team": "SD"
                }
            },
            "7": {
                "posteam": "ARI",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "1100": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 1,
                        "time": "00:10",
                        "yrdln": "ARI 34",
                        "ydstogo": 10,
                        "ydsnet": 1,
                        "posteam": "ARI",
                        "desc": "(:10) (Shotgun) A.Ellington up the middle to ARI 35 for 1 yard (C.Liuget).",
                        "note": null,
                        "players": {
                            "00-0027956": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "1121": {
                        "sp": 0,
                        "qtr": 1,
                        "down": 0,
                        "time": "",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 1,
                        "posteam": "",
                        "desc": "END QUARTER 1",
                        "note": null,
                        "players": {}
                    },
                    "1137": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "15:00",
                        "yrdln": "ARI 35",
                        "ydstogo": 9,
                        "ydsnet": 14,
                        "posteam": "ARI",
                        "desc": "(15:00) A.Ellington up the middle to ARI 48 for 13 yards (E.Weddle; M.Gilchrist).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                }
                            ],
                            "00-0027988": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "M.Gilchrist",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0025424": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "E.Weddle",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 13
                                }
                            ]
                        }
                    },
                    "1158": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "14:24",
                        "yrdln": "ARI 48",
                        "ydstogo": 10,
                        "ydsnet": 57,
                        "posteam": "ARI",
                        "desc": "(14:24) (Shotgun) C.Palmer pass deep right to M.Floyd ran ob at SD 23 for 29 yards (B.Flowers) [M.Ingram]. PENALTY on SD-M.Ingram, Roughing the Passer, 12 yards, enforced at SD 23.",
                        "note": "PENALTY",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 5,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 29
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 27
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 29
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 2
                                }
                            ],
                            "00-0029249": [
                                {
                                    "sequence": 8,
                                    "clubcode": "SD",
                                    "playerName": "M.Ingram",
                                    "statId": 110,
                                    "yards": 0
                                },
                                {
                                    "sequence": 10,
                                    "clubcode": "SD",
                                    "playerName": "M.Ingram",
                                    "statId": 93,
                                    "yards": 12
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 9,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1193": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "14:07",
                        "yrdln": "SD 11",
                        "ydstogo": 10,
                        "ydsnet": 57,
                        "posteam": "ARI",
                        "desc": "(14:07) J.Dwyer up the middle to SD 9 for 2 yards (T.Palepoi).",
                        "note": null,
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 2
                                }
                            ],
                            "00-0030921": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "T.Palepoi",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1214": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "13:26",
                        "yrdln": "SD 9",
                        "ydstogo": 8,
                        "ydsnet": 62,
                        "posteam": "ARI",
                        "desc": "(13:26) (Shotgun) C.Palmer pass short right to A.Ellington pushed ob at SD 4 for 5 yards (M.Ingram).",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 5
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": -2
                                }
                            ],
                            "00-0029249": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "M.Ingram",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 21,
                                    "yards": 5
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 113,
                                    "yards": 7
                                }
                            ]
                        }
                    },
                    "1243": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "12:51",
                        "yrdln": "SD 4",
                        "ydstogo": 3,
                        "ydsnet": 62,
                        "posteam": "ARI",
                        "desc": "(12:51) (Shotgun) C.Palmer pass incomplete short left to Jo. Brown.",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 4
                                }
                            ],
                            "00-0031051": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1265": {
                        "sp": 1,
                        "qtr": 2,
                        "down": 4,
                        "time": "12:47",
                        "yrdln": "SD 4",
                        "ydstogo": 3,
                        "ydsnet": 62,
                        "posteam": "ARI",
                        "desc": "(12:47) C.Catanzaro 22 yard field goal is GOOD, Center-M.Leach, Holder-D.Zastudil.",
                        "note": "FG",
                        "players": {
                            "00-0030896": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 70,
                                    "yards": 22
                                }
                            ]
                        }
                    }
                },
                "fds": 3,
                "result": "Field Goal",
                "penyds": 12,
                "ydsgained": 50,
                "numplays": 8,
                "postime": "2:28",
                "start": {
                    "qtr": 1,
                    "time": "00:10",
                    "yrdln": "ARI 34",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 1,
                    "time": "12:42",
                    "yrdln": "SD 4",
                    "team": "ARI"
                }
            },
            "8": {
                "posteam": "SD",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "1300": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 0,
                        "time": "12:42",
                        "yrdln": "ARI 35",
                        "ydstogo": 0,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "C.Catanzaro kicks 65 yards from ARI 35 to end zone, Touchback.",
                        "note": "KICKOFF",
                        "players": {
                            "00-0030896": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 410,
                                    "yards": 75
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 44,
                                    "yards": 65
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 51,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1315": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "12:42",
                        "yrdln": "SD 20",
                        "ydstogo": 10,
                        "ydsnet": 8,
                        "posteam": "SD",
                        "desc": "(12:42) P.Rivers pass short left to R.Mathews ran ob at SD 28 for 8 yards (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 8
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 4
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 21,
                                    "yards": 8
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 113,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "1339": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "12:05",
                        "yrdln": "SD 28",
                        "ydstogo": 2,
                        "ydsnet": 9,
                        "posteam": "SD",
                        "desc": "(12:05) (No Huddle) R.Mathews up the middle to SD 29 for 1 yard (K.Minter).",
                        "note": null,
                        "players": {
                            "00-0030382": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "K.Minter",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "1360": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 0,
                        "time": "11:27",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 9,
                        "posteam": "",
                        "desc": "Timeout #1 by SD at 11:27.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1377": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "11:27",
                        "yrdln": "SD 29",
                        "ydstogo": 1,
                        "ydsnet": 10,
                        "posteam": "SD",
                        "desc": "(11:27) R.Mathews up the middle to SD 30 for 1 yard (A.Cromartie; E.Stinson).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0024234": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Cromartie",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0031265": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "E.Stinson",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "1398": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "10:32",
                        "yrdln": "SD 30",
                        "ydstogo": 10,
                        "ydsnet": 10,
                        "posteam": "SD",
                        "desc": "(10:32) P.Rivers pass incomplete deep middle to M.Floyd.",
                        "note": null,
                        "players": {
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 45
                                }
                            ],
                            "00-0022414": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1420": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "10:25",
                        "yrdln": "SD 30",
                        "ydstogo": 10,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(10:25) D.Brown up the middle to SD 26 for -4 yards (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 402,
                                    "yards": 4
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -4
                                }
                            ],
                            "00-0027003": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Brown",
                                    "statId": 10,
                                    "yards": -4
                                }
                            ]
                        }
                    },
                    "1441": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "09:42",
                        "yrdln": "SD 26",
                        "ydstogo": 14,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(9:42) (Shotgun) P.Rivers pass incomplete short left to M.Floyd (A.Cromartie).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 10
                                }
                            ],
                            "00-0024234": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Cromartie",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0022414": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1463": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 4,
                        "time": "09:37",
                        "yrdln": "SD 26",
                        "ydstogo": 14,
                        "ydsnet": 6,
                        "posteam": "SD",
                        "desc": "(9:37) M.Scifres punts 41 yards to ARI 33, Center-M.Windt, fair catch by T.Ginn.",
                        "note": "PUNT",
                        "players": {
                            "00-0025396": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 39,
                                    "yards": 0
                                }
                            ],
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 29,
                                    "yards": 41
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Punt",
                "penyds": 0,
                "ydsgained": 6,
                "numplays": 9,
                "postime": "3:13",
                "start": {
                    "qtr": 2,
                    "time": "12:42",
                    "yrdln": "SD 20",
                    "team": "SD"
                },
                "end": {
                    "qtr": 2,
                    "time": "09:29",
                    "yrdln": "SD 26",
                    "team": "SD"
                }
            },
            "9": {
                "posteam": "ARI",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "1484": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "09:29",
                        "yrdln": "ARI 33",
                        "ydstogo": 10,
                        "ydsnet": 2,
                        "posteam": "ARI",
                        "desc": "(9:29) C.Palmer pass short left to M.Floyd pushed ob at ARI 35 for 2 yards (B.Flowers).",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 2
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": -2
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 2
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 4
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1513": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "08:55",
                        "yrdln": "ARI 35",
                        "ydstogo": 8,
                        "ydsnet": -4,
                        "posteam": "ARI",
                        "desc": "(8:55) (Shotgun) C.Palmer sacked at ARI 29 for -6 yards (C.Liuget).",
                        "note": null,
                        "players": {
                            "00-0027956": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 83,
                                    "yards": -6
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 110,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 402,
                                    "yards": 6
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 20,
                                    "yards": -6
                                }
                            ]
                        }
                    },
                    "1532": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "08:09",
                        "yrdln": "ARI 29",
                        "ydstogo": 14,
                        "ydsnet": 7,
                        "posteam": "ARI",
                        "desc": "(8:09) (Shotgun) C.Palmer scrambles left tackle to ARI 40 for 11 yards (E.Weddle).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0025424": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "E.Weddle",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 10,
                                    "yards": 11
                                }
                            ]
                        }
                    },
                    "1553": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 4,
                        "time": "07:29",
                        "yrdln": "ARI 40",
                        "ydstogo": 3,
                        "ydsnet": 7,
                        "posteam": "ARI",
                        "desc": "(7:29) D.Butler punt is BLOCKED by J.Attaochu, Center-M.Leach, ball out of bounds at ARI 17.",
                        "note": "PUNTB",
                        "players": {
                            "00-0028952": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "D.Butler",
                                    "statId": 2,
                                    "yards": 0
                                }
                            ],
                            "00-0031258": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 86,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 0,
                "result": "Blocked Punt",
                "penyds": 0,
                "ydsgained": 7,
                "numplays": 4,
                "postime": "2:11",
                "start": {
                    "qtr": 2,
                    "time": "09:29",
                    "yrdln": "ARI 33",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 2,
                    "time": "07:18",
                    "yrdln": "ARI 40",
                    "team": "ARI"
                }
            },
            "10": {
                "posteam": "SD",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "1578": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "07:18",
                        "yrdln": "ARI 17",
                        "ydstogo": 10,
                        "ydsnet": 2,
                        "posteam": "SD",
                        "desc": "(7:18) E.Royal right end pushed ob at ARI 15 for 2 yards (T.Jefferson).",
                        "note": null,
                        "players": {
                            "00-0030294": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 10,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "1604": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "06:54",
                        "yrdln": "ARI 15",
                        "ydstogo": 8,
                        "ydsnet": 4,
                        "posteam": "SD",
                        "desc": "(6:54) (No Huddle) R.Mathews up the middle to ARI 13 for 2 yards (T.Jefferson).",
                        "note": null,
                        "players": {
                            "00-0030294": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "1625": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "06:10",
                        "yrdln": "ARI 13",
                        "ydstogo": 6,
                        "ydsnet": 4,
                        "posteam": "SD",
                        "desc": "(6:10) (Shotgun) P.Rivers pass incomplete short middle to K.Allen (T.Keiser).",
                        "note": null,
                        "players": {
                            "00-0028742": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "T.Keiser",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1647": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 4,
                        "time": "06:10",
                        "yrdln": "ARI 13",
                        "ydstogo": 6,
                        "ydsnet": -1,
                        "posteam": "SD",
                        "desc": "(6:10) (Field Goal formation) PENALTY on SD-M.Scifres, Delay of Game, 5 yards, enforced at ARI 13 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "1676": {
                        "sp": 1,
                        "qtr": 2,
                        "down": 4,
                        "time": "06:05",
                        "yrdln": "ARI 18",
                        "ydstogo": 11,
                        "ydsnet": -1,
                        "posteam": "SD",
                        "desc": "(6:05) N.Novak 36 yard field goal is GOOD, Center-M.Windt, Holder-M.Scifres.",
                        "note": "FG",
                        "players": {
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 70,
                                    "yards": 36
                                }
                            ]
                        }
                    }
                },
                "fds": 0,
                "result": "Field Goal",
                "penyds": -5,
                "ydsgained": 4,
                "numplays": 5,
                "postime": "1:18",
                "start": {
                    "qtr": 2,
                    "time": "07:18",
                    "yrdln": "ARI 17",
                    "team": "SD"
                },
                "end": {
                    "qtr": 2,
                    "time": "06:00",
                    "yrdln": "ARI 18",
                    "team": "SD"
                }
            },
            "11": {
                "posteam": "ARI",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "1713": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 0,
                        "time": "06:00",
                        "yrdln": "SD 35",
                        "ydstogo": 0,
                        "ydsnet": 0,
                        "posteam": "SD",
                        "desc": "N.Novak kicks 68 yards from SD 35 to ARI -3. T.Ginn to ARI 15 for 18 yards (J.Attaochu).",
                        "note": "KICKOFF",
                        "players": {
                            "00-0025396": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 45,
                                    "yards": 18
                                }
                            ],
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 43,
                                    "yards": 68
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 42,
                                    "yards": 0
                                }
                            ],
                            "00-0031258": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1735": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "05:56",
                        "yrdln": "ARI 15",
                        "ydstogo": 10,
                        "ydsnet": 15,
                        "posteam": "ARI",
                        "desc": "(5:56) (Shotgun) C.Palmer pass incomplete deep left to M.Floyd. PENALTY on SD-S.Wright, Defensive Pass Interference, 15 yards, enforced at ARI 15 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 5,
                                    "yards": 0
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 93,
                                    "yards": 15
                                }
                            ]
                        }
                    },
                    "1768": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "05:46",
                        "yrdln": "ARI 30",
                        "ydstogo": 10,
                        "ydsnet": 16,
                        "posteam": "ARI",
                        "desc": "(5:46) J.Dwyer right tackle to ARI 31 for 1 yard (S.Wright).",
                        "note": null,
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1789": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "05:08",
                        "yrdln": "ARI 31",
                        "ydstogo": 9,
                        "ydsnet": 19,
                        "posteam": "ARI",
                        "desc": "(5:08) C.Palmer pass short left to J.Dwyer to ARI 34 for 3 yards (J.Johnson).",
                        "note": null,
                        "players": {
                            "00-0022139": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "J.Johnson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027786": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 21,
                                    "yards": 3
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 3
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ]
                        }
                    },
                    "1813": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "04:18",
                        "yrdln": "ARI 34",
                        "ydstogo": 6,
                        "ydsnet": 24,
                        "posteam": "ARI",
                        "desc": "(4:18) (Shotgun) C.Palmer pass short right to A.Ellington to ARI 39 for 5 yards (S.Wright).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 5
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 0
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 21,
                                    "yards": 5
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 113,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "1837": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 0,
                        "time": "03:30",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 24,
                        "posteam": "",
                        "desc": "Timeout #2 by SD at 03:30.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1854": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 4,
                        "time": "03:30",
                        "yrdln": "ARI 39",
                        "ydstogo": 1,
                        "ydsnet": 24,
                        "posteam": "ARI",
                        "desc": "(3:30) D.Butler punts 61 yards to end zone, Center-M.Leach, Touchback.",
                        "note": "PUNT",
                        "players": {
                            "00-0028952": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "D.Butler",
                                    "statId": 32,
                                    "yards": 61
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 40,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Punt",
                "penyds": 15,
                "ydsgained": 9,
                "numplays": 7,
                "postime": "2:38",
                "start": {
                    "qtr": 2,
                    "time": "06:00",
                    "yrdln": "ARI 15",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 2,
                    "time": "03:22",
                    "yrdln": "ARI 39",
                    "team": "ARI"
                }
            },
            "12": {
                "posteam": "SD",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "1889": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "03:22",
                        "yrdln": "SD 20",
                        "ydstogo": 10,
                        "ydsnet": 4,
                        "posteam": "SD",
                        "desc": "(3:22) (Shotgun) P.Rivers pass short left to K.Allen to SD 24 for 4 yards (A.Cromartie).",
                        "note": null,
                        "players": {
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 21,
                                    "yards": 4
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 4
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 4
                                }
                            ],
                            "00-0024234": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "A.Cromartie",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "1913": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "02:57",
                        "yrdln": "SD 24",
                        "ydstogo": 6,
                        "ydsnet": 12,
                        "posteam": "SD",
                        "desc": "(2:57) (No Huddle, Shotgun) R.Mathews up the middle to SD 32 for 8 yards (T.Jefferson; R.Johnson).",
                        "note": null,
                        "players": {
                            "00-0027067": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "R.Johnson",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 8
                                }
                            ]
                        }
                    },
                    "1934": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "02:25",
                        "yrdln": "SD 32",
                        "ydstogo": 10,
                        "ydsnet": 12,
                        "posteam": "SD",
                        "desc": "(2:25) (No Huddle, Shotgun) P.Rivers pass incomplete short middle to A.Gates.",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 13
                                }
                            ]
                        }
                    },
                    "1956": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "02:17",
                        "yrdln": "SD 32",
                        "ydstogo": 10,
                        "ydsnet": 24,
                        "posteam": "SD",
                        "desc": "(2:17) (Shotgun) P.Rivers pass short right to R.Mathews to SD 44 for 12 yards (D.Bucannon).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0031366": [
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 12
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 1
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 21,
                                    "yards": 12
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 113,
                                    "yards": 11
                                }
                            ]
                        }
                    },
                    "1980": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 0,
                        "time": "02:00",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 24,
                        "posteam": "",
                        "desc": "Two-Minute Warning",
                        "note": null,
                        "players": {}
                    },
                    "1997": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "02:00",
                        "yrdln": "SD 44",
                        "ydstogo": 10,
                        "ydsnet": 30,
                        "posteam": "SD",
                        "desc": "(2:00) (Shotgun) P.Rivers pass short right to D.Woodhead to 50 for 6 yards (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 21,
                                    "yards": 6
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 113,
                                    "yards": 12
                                }
                            ],
                            "00-0021246": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 6
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": -6
                                }
                            ]
                        }
                    },
                    "2021": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "01:27",
                        "yrdln": "50",
                        "ydstogo": 4,
                        "ydsnet": 40,
                        "posteam": "SD",
                        "desc": "(1:27) (No Huddle, Shotgun) P.Rivers scrambles left tackle to ARI 40 for 10 yards (J.Powers).",
                        "note": null,
                        "players": {
                            "00-0027064": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "J.Powers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 10,
                                    "yards": 10
                                }
                            ]
                        }
                    },
                    "2042": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "00:57",
                        "yrdln": "ARI 40",
                        "ydstogo": 10,
                        "ydsnet": 44,
                        "posteam": "SD",
                        "desc": "(:57) (Shotgun) P.Rivers pass incomplete short right to A.Gates [C.Campbell].",
                        "note": null,
                        "players": {
                            "00-0026190": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Campbell",
                                    "statId": 110,
                                    "yards": 0
                                }
                            ],
                            "00-0021547": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 12
                                }
                            ]
                        }
                    },
                    "2065": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "00:53",
                        "yrdln": "ARI 40",
                        "ydstogo": 10,
                        "ydsnet": 44,
                        "posteam": "SD",
                        "desc": "(:53) (Shotgun) P.Rivers pass short left to A.Gates to ARI 36 for 4 yards (T.Jefferson).",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 21,
                                    "yards": 4
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 113,
                                    "yards": 1
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 4
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2089": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 3,
                        "time": "00:22",
                        "yrdln": "ARI 36",
                        "ydstogo": 6,
                        "ydsnet": 44,
                        "posteam": "SD",
                        "desc": "(:22) (No Huddle, Shotgun) P.Rivers pass short middle intended for E.Royal INTERCEPTED by J.Powers at ARI 32. J.Powers to ARI 44 for 12 yards (D.Woodhead).",
                        "note": "INT",
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027064": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "J.Powers",
                                    "statId": 25,
                                    "yards": 12
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "J.Powers",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 19,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 4
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 3,
                "result": "Interception",
                "penyds": 0,
                "ydsgained": 44,
                "numplays": 10,
                "postime": "3:06",
                "start": {
                    "qtr": 2,
                    "time": "03:22",
                    "yrdln": "SD 20",
                    "team": "SD"
                },
                "end": {
                    "qtr": 2,
                    "time": "00:16",
                    "yrdln": "ARI 36",
                    "team": "SD"
                }
            },
            "13": {
                "posteam": "ARI",
                "qtr": 2,
                "redzone": true,
                "plays": {
                    "2116": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 1,
                        "time": "00:16",
                        "yrdln": "ARI 44",
                        "ydstogo": 10,
                        "ydsnet": 5,
                        "posteam": "ARI",
                        "desc": "(:16) (Shotgun) C.Palmer pass short right to A.Ellington pushed ob at ARI 49 for 5 yards (J.Verrett).",
                        "note": null,
                        "players": {
                            "00-0031334": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "J.Verrett",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 5
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 5
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 21,
                                    "yards": 5
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2145": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 2,
                        "time": "00:11",
                        "yrdln": "ARI 49",
                        "ydstogo": 5,
                        "ydsnet": 30,
                        "posteam": "ARI",
                        "desc": "(:11) (Shotgun) C.Palmer pass deep middle to T.Ginn to SD 26 for 25 yards (R.Marshall).",
                        "note": null,
                        "players": {
                            "00-0024273": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "R.Marshall",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 25
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 22
                                }
                            ],
                            "00-0025396": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 21,
                                    "yards": 25
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 113,
                                    "yards": 3
                                }
                            ]
                        }
                    },
                    "2169": {
                        "sp": 0,
                        "qtr": 2,
                        "down": 0,
                        "time": "00:04",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 30,
                        "posteam": "",
                        "desc": "Timeout #2 by ARI at 00:04.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2186": {
                        "sp": 1,
                        "qtr": 2,
                        "down": 1,
                        "time": "00:04",
                        "yrdln": "SD 26",
                        "ydstogo": 10,
                        "ydsnet": 30,
                        "posteam": "ARI",
                        "desc": "(:04) C.Catanzaro 44 yard field goal is GOOD, Center-M.Leach, Holder-D.Zastudil. Penalty on SD-M.Ingram, Defensive Holding, declined.",
                        "note": "FG",
                        "players": {
                            "00-0030896": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 70,
                                    "yards": 44
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Field Goal",
                "penyds": 0,
                "ydsgained": 30,
                "numplays": 4,
                "postime": "0:16",
                "start": {
                    "qtr": 2,
                    "time": "00:16",
                    "yrdln": "ARI 44",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 2,
                    "time": "00:00",
                    "yrdln": "SD 26",
                    "team": "ARI"
                }
            },
            "14": {
                "posteam": "SD",
                "qtr": 3,
                "redzone": true,
                "plays": {
                    "2231": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 0,
                        "time": "15:00",
                        "yrdln": "ARI 35",
                        "ydstogo": 0,
                        "ydsnet": 19,
                        "posteam": "ARI",
                        "desc": "C.Catanzaro kicks 65 yards from ARI 35 to end zone, Touchback.",
                        "note": "KICKOFF",
                        "players": {
                            "00-0030896": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 410,
                                    "yards": 73
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 44,
                                    "yards": 65
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 51,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2249": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "15:00",
                        "yrdln": "SD 20",
                        "ydstogo": 10,
                        "ydsnet": 19,
                        "posteam": "SD",
                        "desc": "(15:00) (Shotgun) P.Rivers pass short middle to A.Gates to SD 37 for 17 yards (J.Powers). Penalty on ARI-A.Cromartie, Illegal Use of Hands, declined.",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 21,
                                    "yards": 17
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 113,
                                    "yards": 5
                                }
                            ],
                            "00-0027064": [
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "J.Powers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 17
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 12
                                }
                            ]
                        }
                    },
                    "2284": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "14:36",
                        "yrdln": "SD 37",
                        "ydstogo": 10,
                        "ydsnet": 16,
                        "posteam": "SD",
                        "desc": "(14:36) (No Huddle) R.Mathews right end to SD 36 for -1 yards (D.Bucannon).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -1
                                }
                            ],
                            "00-0031366": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "D.Bucannon",
                                    "statId": 402,
                                    "yards": 1
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": -1
                                }
                            ]
                        }
                    },
                    "2305": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "13:59",
                        "yrdln": "SD 36",
                        "ydstogo": 11,
                        "ydsnet": 80,
                        "posteam": "SD",
                        "desc": "(13:59) (Shotgun) P.Rivers pass short middle to M.Floyd to SD 43 for 7 yards (L.Foote). ARI-J.Abraham was injured during the play.",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 7
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ],
                            "00-0022414": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 7
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "2334": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 3,
                        "time": "13:27",
                        "yrdln": "SD 43",
                        "ydstogo": 4,
                        "ydsnet": 80,
                        "posteam": "SD",
                        "desc": "(13:27) (Shotgun) P.Rivers pass deep right to M.Floyd ran ob at ARI 25 for 32 yards.",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 32
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 27
                                }
                            ],
                            "00-0022414": [
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 32
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "2364": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "12:53",
                        "yrdln": "ARI 25",
                        "ydstogo": 10,
                        "ydsnet": 75,
                        "posteam": "SD",
                        "desc": "(12:53) (Shotgun) P.Rivers pass deep middle to L.Green to ARI 5 for 20 yards (R.Johnson).",
                        "note": null,
                        "players": {
                            "00-0027067": [
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "R.Johnson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 20
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 18
                                }
                            ],
                            "00-0029275": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "L.Green",
                                    "statId": 21,
                                    "yards": 20
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "L.Green",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "L.Green",
                                    "statId": 113,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "2388": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "12:29",
                        "yrdln": "ARI 5",
                        "ydstogo": 5,
                        "ydsnet": 74,
                        "posteam": "SD",
                        "desc": "(12:29) (No Huddle) D.Woodhead right tackle to ARI 6 for -1 yards (T.Jefferson).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 10,
                                    "yards": -1
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -1
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 402,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "2409": {
                        "sp": 1,
                        "qtr": 3,
                        "down": 2,
                        "time": "11:43",
                        "yrdln": "ARI 6",
                        "ydstogo": 6,
                        "ydsnet": 80,
                        "posteam": "SD",
                        "desc": "(11:43) (Shotgun) P.Rivers pass short middle to M.Floyd for 6 yards, TOUCHDOWN.",
                        "note": "TD",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 16,
                                    "yards": 6
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 5
                                }
                            ],
                            "00-0022414": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 22,
                                    "yards": 6
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "2437": {
                        "sp": 1,
                        "qtr": 3,
                        "down": 0,
                        "time": "11:38",
                        "yrdln": "ARI 2",
                        "ydstogo": 0,
                        "ydsnet": 80,
                        "posteam": "SD",
                        "desc": "N.Novak extra point is GOOD, Center-M.Windt, Holder-M.Scifres.",
                        "note": "XP",
                        "players": {
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 72,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 4,
                "result": "Touchdown",
                "penyds": 0,
                "ydsgained": 80,
                "numplays": 9,
                "postime": "3:22",
                "start": {
                    "qtr": 3,
                    "time": "15:00",
                    "yrdln": "SD 20",
                    "team": "SD"
                },
                "end": {
                    "qtr": 3,
                    "time": "11:38",
                    "yrdln": "ARI 6",
                    "team": "SD"
                }
            },
            "15": {
                "posteam": "ARI",
                "qtr": 3,
                "redzone": true,
                "plays": {
                    "2468": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 0,
                        "time": "11:38",
                        "yrdln": "SD 35",
                        "ydstogo": 0,
                        "ydsnet": 0,
                        "posteam": "SD",
                        "desc": "N.Novak kicks 67 yards from SD 35 to ARI -2. T.Ginn to ARI 8 for 10 yards (K.Conner).",
                        "note": "KICKOFF",
                        "players": {
                            "00-0027831": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "K.Conner",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0025396": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 45,
                                    "yards": 10
                                }
                            ],
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 43,
                                    "yards": 67
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 42,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2490": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "11:32",
                        "yrdln": "ARI 8",
                        "ydstogo": 10,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "(11:32) A.Ellington right end to ARI 8 for no gain (M.Te'o).",
                        "note": null,
                        "players": {
                            "00-0030278": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2511": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "10:51",
                        "yrdln": "ARI 8",
                        "ydstogo": 10,
                        "ydsnet": 7,
                        "posteam": "ARI",
                        "desc": "(10:51) C.Palmer scrambles right end ran ob at ARI 15 for 7 yards (B.Flowers).",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 10,
                                    "yards": 7
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2532": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 3,
                        "time": "10:09",
                        "yrdln": "ARI 15",
                        "ydstogo": 3,
                        "ydsnet": 13,
                        "posteam": "ARI",
                        "desc": "(10:09) (Shotgun) C.Palmer pass short right to Ja. Brown to ARI 21 for 6 yards (R.Marshall).",
                        "note": null,
                        "players": {
                            "00-0024273": [
                                {
                                    "sequence": 8,
                                    "clubcode": "SD",
                                    "playerName": "R.Marshall",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0030300": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "Ja. Brown",
                                    "statId": 21,
                                    "yards": 6
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "Ja. Brown",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "Ja. Brown",
                                    "statId": 113,
                                    "yards": 3
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 6
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ]
                        }
                    },
                    "2556": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "09:31",
                        "yrdln": "ARI 21",
                        "ydstogo": 10,
                        "ydsnet": 17,
                        "posteam": "ARI",
                        "desc": "(9:31) A.Ellington up the middle to ARI 25 for 4 yards (S.Lissemore).",
                        "note": null,
                        "players": {
                            "00-0027826": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "S.Lissemore",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "2577": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "08:51",
                        "yrdln": "ARI 25",
                        "ydstogo": 6,
                        "ydsnet": 24,
                        "posteam": "ARI",
                        "desc": "(8:51) C.Palmer pass short right to R.Hughes to ARI 32 for 7 yards (B.Flowers).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 7
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 2
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0028345": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "R.Hughes",
                                    "statId": 21,
                                    "yards": 7
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "R.Hughes",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "R.Hughes",
                                    "statId": 113,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "2601": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "08:12",
                        "yrdln": "ARI 32",
                        "ydstogo": 10,
                        "ydsnet": 24,
                        "posteam": "ARI",
                        "desc": "(8:12) A.Ellington up the middle to ARI 32 for no gain (K.Reyes).",
                        "note": null,
                        "players": {
                            "00-0029256": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "K.Reyes",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2622": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "07:35",
                        "yrdln": "ARI 32",
                        "ydstogo": 10,
                        "ydsnet": 25,
                        "posteam": "ARI",
                        "desc": "(7:35) A.Ellington right tackle to ARI 33 for 1 yard (J.Attaochu).",
                        "note": null,
                        "players": {
                            "00-0031258": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "2643": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 3,
                        "time": "06:51",
                        "yrdln": "ARI 33",
                        "ydstogo": 9,
                        "ydsnet": 21,
                        "posteam": "ARI",
                        "desc": "(6:51) (Shotgun) C.Palmer sacked at ARI 25 for -8 yards (J.Attaochu). FUMBLES (J.Attaochu) [J.Attaochu], RECOVERED by SD-D.Freeney at ARI 29. D.Freeney to ARI 29 for no gain (T.Larsen).",
                        "note": "FUMBLE",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0027607": [
                                {
                                    "sequence": 10,
                                    "clubcode": "ARI",
                                    "playerName": "T.Larsen",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 20,
                                    "yards": -4
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 52,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 106,
                                    "yards": 0
                                }
                            ],
                            "00-0021146": [
                                {
                                    "sequence": 9,
                                    "clubcode": "SD",
                                    "playerName": "D.Freeney",
                                    "statId": 59,
                                    "yards": 0
                                }
                            ],
                            "00-0031258": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 83,
                                    "yards": -4
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 110,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 8,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 91,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 2,
                "result": "Fumble",
                "penyds": 0,
                "ydsgained": 21,
                "numplays": 9,
                "postime": "4:55",
                "start": {
                    "qtr": 3,
                    "time": "11:38",
                    "yrdln": "ARI 8",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 3,
                    "time": "06:43",
                    "yrdln": "ARI 33",
                    "team": "ARI"
                }
            },
            "16": {
                "posteam": "SD",
                "qtr": 3,
                "redzone": true,
                "plays": {
                    "2673": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "06:43",
                        "yrdln": "ARI 29",
                        "ydstogo": 10,
                        "ydsnet": 9,
                        "posteam": "SD",
                        "desc": "(6:43) (Shotgun) P.Rivers pass short left to K.Allen to ARI 20 for 9 yards (K.Minter).",
                        "note": null,
                        "players": {
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 21,
                                    "yards": 9
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 113,
                                    "yards": 6
                                }
                            ],
                            "00-0030382": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "K.Minter",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 9
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ]
                        }
                    },
                    "2697": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "06:17",
                        "yrdln": "ARI 20",
                        "ydstogo": 1,
                        "ydsnet": 9,
                        "posteam": "SD",
                        "desc": "(6:17) R.Mathews up the middle to ARI 20 for no gain (M.Shaughnessy).",
                        "note": null,
                        "players": {
                            "00-0027045": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "M.Shaughnessy",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2718": {
                        "sp": 1,
                        "qtr": 3,
                        "down": 3,
                        "time": "05:33",
                        "yrdln": "ARI 20",
                        "ydstogo": 1,
                        "ydsnet": 29,
                        "posteam": "SD",
                        "desc": "(5:33) R.Mathews left tackle for 20 yards, TOUCHDOWN.",
                        "note": "TD",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 11,
                                    "yards": 20
                                }
                            ]
                        }
                    },
                    "2736": {
                        "sp": 1,
                        "qtr": 3,
                        "down": 0,
                        "time": "05:26",
                        "yrdln": "ARI 2",
                        "ydstogo": 0,
                        "ydsnet": 29,
                        "posteam": "SD",
                        "desc": "N.Novak extra point is GOOD, Center-M.Windt, Holder-M.Scifres.",
                        "note": "XP",
                        "players": {
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 72,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Touchdown",
                "penyds": 0,
                "ydsgained": 29,
                "numplays": 4,
                "postime": "1:17",
                "start": {
                    "qtr": 3,
                    "time": "06:43",
                    "yrdln": "ARI 29",
                    "team": "SD"
                },
                "end": {
                    "qtr": 3,
                    "time": "05:26",
                    "yrdln": "ARI 20",
                    "team": "SD"
                }
            },
            "17": {
                "posteam": "ARI",
                "qtr": 3,
                "redzone": true,
                "plays": {
                    "2767": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 0,
                        "time": "05:26",
                        "yrdln": "SD 35",
                        "ydstogo": 0,
                        "ydsnet": 1,
                        "posteam": "SD",
                        "desc": "N.Novak kicks 74 yards from SD 35 to ARI -9. T.Ginn, Touchback.",
                        "note": "KICKOFF",
                        "players": {
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 51,
                                    "yards": 0
                                }
                            ],
                            "00-0023096": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "N.Novak",
                                    "statId": 44,
                                    "yards": 65
                                }
                            ]
                        }
                    },
                    "2785": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 0,
                        "time": "05:26",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 6,
                        "posteam": "",
                        "desc": "Timeout at 05:26.",
                        "note": "Timeout",
                        "players": {}
                    },
                    "2802": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "05:26",
                        "yrdln": "ARI 20",
                        "ydstogo": 10,
                        "ydsnet": 1,
                        "posteam": "ARI",
                        "desc": "(5:26) C.Palmer pass short left to A.Ellington pushed ob at ARI 21 for 1 yard (B.Flowers).",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 1
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": -5
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 21,
                                    "yards": 1
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 113,
                                    "yards": 6
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2835": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "04:44",
                        "yrdln": "ARI 21",
                        "ydstogo": 9,
                        "ydsnet": 6,
                        "posteam": "ARI",
                        "desc": "(4:44) A.Ellington right end to ARI 26 for 5 yards (M.Te'o, J.Verrett).",
                        "note": null,
                        "players": {
                            "00-0030278": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 80,
                                    "yards": 0
                                }
                            ],
                            "00-0031334": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "J.Verrett",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "2856": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 0,
                        "time": "04:02",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 6,
                        "posteam": "",
                        "desc": "Timeout #1 by ARI at 04:02.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "2873": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 3,
                        "time": "04:02",
                        "yrdln": "ARI 26",
                        "ydstogo": 4,
                        "ydsnet": 1,
                        "posteam": "ARI",
                        "desc": "(4:02) (Shotgun) PENALTY on ARI-B.Massie, False Start, 5 yards, enforced at ARI 26 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0029528": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "B.Massie",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "2905": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 3,
                        "time": "04:02",
                        "yrdln": "ARI 21",
                        "ydstogo": 9,
                        "ydsnet": 1,
                        "posteam": "ARI",
                        "desc": "(4:02) (Shotgun) C.Palmer pass incomplete.",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 29
                                }
                            ]
                        }
                    },
                    "2927": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 4,
                        "time": "03:54",
                        "yrdln": "ARI 21",
                        "ydstogo": 9,
                        "ydsnet": 1,
                        "posteam": "ARI",
                        "desc": "(3:54) D.Butler punts 49 yards to SD 30, Center-M.Leach. E.Royal to SD 35 for 5 yards (J.Bethel).",
                        "note": "PUNT",
                        "players": {
                            "00-0028952": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "D.Butler",
                                    "statId": 29,
                                    "yards": 49
                                }
                            ],
                            "00-0029530": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "J.Bethel",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 33,
                                    "yards": 5
                                }
                            ]
                        }
                    }
                },
                "fds": 0,
                "result": "Punt",
                "penyds": -5,
                "ydsgained": 6,
                "numplays": 8,
                "postime": "1:42",
                "start": {
                    "qtr": 3,
                    "time": "05:26",
                    "yrdln": "ARI 20",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 3,
                    "time": "03:44",
                    "yrdln": "ARI 21",
                    "team": "ARI"
                }
            },
            "18": {
                "posteam": "SD",
                "qtr": 3,
                "redzone": true,
                "plays": {
                    "2953": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "03:44",
                        "yrdln": "SD 35",
                        "ydstogo": 10,
                        "ydsnet": 9,
                        "posteam": "SD",
                        "desc": "(3:44) (Shotgun) P.Rivers pass short left to K.Allen to SD 44 for 9 yards (R.Johnson).",
                        "note": null,
                        "players": {
                            "00-0027067": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "R.Johnson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 21,
                                    "yards": 9
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 113,
                                    "yards": 12
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 9
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": -3
                                }
                            ]
                        }
                    },
                    "2977": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "03:10",
                        "yrdln": "SD 44",
                        "ydstogo": 1,
                        "ydsnet": 7,
                        "posteam": "SD",
                        "desc": "(3:10) (Shotgun) D.Woodhead left tackle to SD 42 for -2 yards (T.Kelly).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 10,
                                    "yards": -2
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -2
                                }
                            ],
                            "00-0022539": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Kelly",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "T.Kelly",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "T.Kelly",
                                    "statId": 402,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "2998": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 3,
                        "time": "02:29",
                        "yrdln": "SD 42",
                        "ydstogo": 3,
                        "ydsnet": 7,
                        "posteam": "SD",
                        "desc": "(2:29) (Shotgun) P.Rivers pass incomplete short middle to A.Gates.",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "3020": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 4,
                        "time": "02:24",
                        "yrdln": "SD 42",
                        "ydstogo": 3,
                        "ydsnet": 7,
                        "posteam": "SD",
                        "desc": "(2:24) M.Scifres punts 22 yards to ARI 36, Center-M.Windt, out of bounds.",
                        "note": "PUNT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 37,
                                    "yards": 0
                                }
                            ],
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 29,
                                    "yards": 22
                                }
                            ]
                        }
                    }
                },
                "fds": 0,
                "result": "Punt",
                "penyds": 0,
                "ydsgained": 7,
                "numplays": 4,
                "postime": "1:31",
                "start": {
                    "qtr": 3,
                    "time": "03:44",
                    "yrdln": "SD 35",
                    "team": "SD"
                },
                "end": {
                    "qtr": 3,
                    "time": "02:13",
                    "yrdln": "SD 42",
                    "team": "SD"
                }
            },
            "19": {
                "posteam": "ARI",
                "qtr": 4,
                "redzone": true,
                "plays": {
                    "3039": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "02:13",
                        "yrdln": "ARI 36",
                        "ydstogo": 10,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "(2:13) (Shotgun) C.Palmer pass incomplete deep middle to R.Housler (M.Gilchrist).",
                        "note": null,
                        "players": {
                            "00-0027988": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "M.Gilchrist",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0028007": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "R.Housler",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 24
                                }
                            ]
                        }
                    },
                    "3061": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "02:09",
                        "yrdln": "ARI 36",
                        "ydstogo": 10,
                        "ydsnet": 16,
                        "posteam": "ARI",
                        "desc": "(2:09) C.Palmer pass deep middle to R.Housler to SD 48 for 16 yards (D.Butler).",
                        "note": null,
                        "players": {
                            "00-0027682": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "D.Butler",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0028007": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "R.Housler",
                                    "statId": 21,
                                    "yards": 16
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "R.Housler",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "R.Housler",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 16
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 16
                                }
                            ]
                        }
                    },
                    "3085": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "01:31",
                        "yrdln": "SD 48",
                        "ydstogo": 10,
                        "ydsnet": 23,
                        "posteam": "ARI",
                        "desc": "(1:31) A.Ellington up the middle to SD 41 for 7 yards (E.Weddle).",
                        "note": null,
                        "players": {
                            "00-0025424": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "E.Weddle",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 7
                                }
                            ]
                        }
                    },
                    "3106": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 2,
                        "time": "00:53",
                        "yrdln": "SD 41",
                        "ydstogo": 3,
                        "ydsnet": 34,
                        "posteam": "ARI",
                        "desc": "(:53) C.Palmer pass short right to A.Ellington to SD 30 for 11 yards (M.Te'o).",
                        "note": null,
                        "players": {
                            "00-0030278": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 11
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 21,
                                    "yards": 11
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 113,
                                    "yards": 11
                                }
                            ]
                        }
                    },
                    "3130": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 1,
                        "time": "00:14",
                        "yrdln": "SD 30",
                        "ydstogo": 10,
                        "ydsnet": 33,
                        "posteam": "ARI",
                        "desc": "(:14) A.Ellington right end to SD 31 for -1 yards (M.Te'o).",
                        "note": null,
                        "players": {
                            "00-0030278": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 402,
                                    "yards": 1
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -1
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": -1
                                }
                            ]
                        }
                    },
                    "3151": {
                        "sp": 0,
                        "qtr": 3,
                        "down": 0,
                        "time": "",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 33,
                        "posteam": "",
                        "desc": "END QUARTER 3",
                        "note": null,
                        "players": {}
                    },
                    "3168": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "15:00",
                        "yrdln": "SD 31",
                        "ydstogo": 11,
                        "ydsnet": 38,
                        "posteam": "ARI",
                        "desc": "(15:00) (Shotgun) C.Palmer pass incomplete deep right to J.Carlson. PENALTY on SD-R.Marshall, Defensive Holding, 5 yards, enforced at SD 31 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0024273": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "R.Marshall",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 5,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3206": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "14:55",
                        "yrdln": "SD 26",
                        "ydstogo": 10,
                        "ydsnet": 43,
                        "posteam": "ARI",
                        "desc": "(14:55) S.Taylor up the middle to SD 21 for 5 yards (C.Liuget).",
                        "note": null,
                        "players": {
                            "00-0027956": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030282": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 10,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "3227": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "14:14",
                        "yrdln": "SD 21",
                        "ydstogo": 5,
                        "ydsnet": 54,
                        "posteam": "ARI",
                        "desc": "(14:14) C.Palmer pass short middle to S.Taylor to SD 10 for 11 yards (M.Te'o, M.Ingram).",
                        "note": null,
                        "players": {
                            "00-0030278": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 80,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0030282": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 21,
                                    "yards": 11
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 113,
                                    "yards": 8
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 11
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 3
                                }
                            ],
                            "00-0029249": [
                                {
                                    "sequence": 8,
                                    "clubcode": "SD",
                                    "playerName": "M.Ingram",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3251": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "13:30",
                        "yrdln": "SD 10",
                        "ydstogo": 10,
                        "ydsnet": 59,
                        "posteam": "ARI",
                        "desc": "(13:30) (Shotgun) C.Palmer pass short right to S.Taylor to SD 5 for 5 yards (J.Johnson, R.Marshall).",
                        "note": null,
                        "players": {
                            "00-0024273": [
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "R.Marshall",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0022139": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "J.Johnson",
                                    "statId": 80,
                                    "yards": 0
                                }
                            ],
                            "00-0030282": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 21,
                                    "yards": 5
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 113,
                                    "yards": 11
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 5
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": -6
                                }
                            ]
                        }
                    },
                    "3279": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "12:43",
                        "yrdln": "SD 5",
                        "ydstogo": 5,
                        "ydsnet": 59,
                        "posteam": "ARI",
                        "desc": "(12:43) C.Palmer pass incomplete short right to L.Fitzgerald.",
                        "note": null,
                        "players": {
                            "00-0022921": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "3301": {
                        "sp": 1,
                        "qtr": 4,
                        "down": 3,
                        "time": "12:38",
                        "yrdln": "SD 5",
                        "ydstogo": 5,
                        "ydsnet": 64,
                        "posteam": "ARI",
                        "desc": "(12:38) (Shotgun) C.Palmer pass short right to S.Taylor for 5 yards, TOUCHDOWN.",
                        "note": "TD",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0030282": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 22,
                                    "yards": 5
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "S.Taylor",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 16,
                                    "yards": 5
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "3322": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "12:30",
                        "yrdln": "SD 2",
                        "ydstogo": 0,
                        "ydsnet": 64,
                        "posteam": "ARI",
                        "desc": "TWO-POINT CONVERSION ATTEMPT. J.Dwyer rushes right tackle. ATTEMPT FAILS.",
                        "note": "2PRF",
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 76,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 5,
                "result": "Touchdown",
                "penyds": 5,
                "ydsgained": 59,
                "numplays": 13,
                "postime": "4:43",
                "start": {
                    "qtr": 3,
                    "time": "02:13",
                    "yrdln": "ARI 36",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 3,
                    "time": "12:30",
                    "yrdln": "SD 5",
                    "team": "ARI"
                }
            },
            "20": {
                "posteam": "SD",
                "qtr": 4,
                "redzone": true,
                "plays": {
                    "3351": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "12:30",
                        "yrdln": "ARI 35",
                        "ydstogo": 0,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "C.Catanzaro kicks 72 yards from ARI 35 to SD -7. D.Brown, Touchback.",
                        "note": "KICKOFF",
                        "players": {
                            "00-0030896": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 44,
                                    "yards": 65
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 51,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3369": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "12:30",
                        "yrdln": "SD 20",
                        "ydstogo": 10,
                        "ydsnet": 11,
                        "posteam": "SD",
                        "desc": "(12:30) R.Mathews left end pushed ob at SD 31 for 11 yards (K.Minter).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                }
                            ],
                            "00-0030382": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "K.Minter",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": 11
                                }
                            ]
                        }
                    },
                    "3391": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "11:51",
                        "yrdln": "SD 31",
                        "ydstogo": 10,
                        "ydsnet": 9,
                        "posteam": "SD",
                        "desc": "(11:51) (Shotgun) R.Mathews up the middle to SD 29 for -2 yards (M.Shaughnessy).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -2
                                }
                            ],
                            "00-0027045": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "M.Shaughnessy",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "M.Shaughnessy",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "M.Shaughnessy",
                                    "statId": 402,
                                    "yards": 2
                                }
                            ],
                            "00-0027864": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "R.Mathews",
                                    "statId": 10,
                                    "yards": -2
                                }
                            ]
                        }
                    },
                    "3412": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "11:08",
                        "yrdln": "SD 29",
                        "ydstogo": 12,
                        "ydsnet": 13,
                        "posteam": "SD",
                        "desc": "(11:08) (Shotgun) P.Rivers pass short middle to L.Green to SD 33 for 4 yards (R.Johnson).",
                        "note": null,
                        "players": {
                            "00-0027067": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "R.Johnson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 4
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 2
                                }
                            ],
                            "00-0029275": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "L.Green",
                                    "statId": 21,
                                    "yards": 4
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "L.Green",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "L.Green",
                                    "statId": 113,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "3436": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "10:23",
                        "yrdln": "SD 33",
                        "ydstogo": 8,
                        "ydsnet": 18,
                        "posteam": "SD",
                        "desc": "(10:23) (No Huddle, Shotgun) P.Rivers pass short right intended for A.Gates INTERCEPTED by T.Jefferson at SD 41. T.Jefferson to SD 40 for 1 yard (E.Royal). PENALTY on ARI-T.Jefferson, Defensive Holding, 5 yards, enforced at SD 33 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 5,
                                    "yards": 0
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 93,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "3473": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "10:17",
                        "yrdln": "SD 38",
                        "ydstogo": 10,
                        "ydsnet": 15,
                        "posteam": "SD",
                        "desc": "(10:17) E.Royal left end to SD 35 for -3 yards (S.Acho).",
                        "note": null,
                        "players": {
                            "00-0028041": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "S.Acho",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "S.Acho",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "S.Acho",
                                    "statId": 402,
                                    "yards": 3
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 95,
                                    "yards": -3
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 10,
                                    "yards": -3
                                }
                            ]
                        }
                    },
                    "3494": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "09:35",
                        "yrdln": "SD 35",
                        "ydstogo": 13,
                        "ydsnet": 15,
                        "posteam": "SD",
                        "desc": "(9:35) (Shotgun) P.Rivers pass incomplete deep right to E.Royal.",
                        "note": null,
                        "players": {
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 35
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3516": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "09:29",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 15,
                        "posteam": "",
                        "desc": "Timeout #1 by SD at 09:29.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3533": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "09:29",
                        "yrdln": "SD 35",
                        "ydstogo": 13,
                        "ydsnet": 49,
                        "posteam": "SD",
                        "desc": "(9:29) (Shotgun) P.Rivers pass deep left to A.Gates to ARI 31 for 34 yards (T.Jefferson) [T.Kelly].",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 21,
                                    "yards": 34
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 113,
                                    "yards": 7
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0022539": [
                                {
                                    "sequence": 8,
                                    "clubcode": "ARI",
                                    "playerName": "T.Kelly",
                                    "statId": 110,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 34
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 27
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 9,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3562": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "08:52",
                        "yrdln": "ARI 31",
                        "ydstogo": 10,
                        "ydsnet": 50,
                        "posteam": "SD",
                        "desc": "(8:52) D.Woodhead up the middle to ARI 30 for 1 yard (T.Jefferson).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3583": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "08:18",
                        "yrdln": "ARI 30",
                        "ydstogo": 9,
                        "ydsnet": 51,
                        "posteam": "SD",
                        "desc": "(8:18) D.Woodhead up the middle to ARI 29 for 1 yard (D.Williams).",
                        "note": null,
                        "players": {
                            "00-0026019": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "D.Woodhead",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ],
                            "00-0027877": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "D.Williams",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3604": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "07:34",
                        "yrdln": "ARI 29",
                        "ydstogo": 8,
                        "ydsnet": 37,
                        "posteam": "SD",
                        "desc": "(7:34) (No Huddle, Shotgun) P.Rivers FUMBLES (Aborted) at ARI 33, and recovers at ARI 43. P.Rivers to ARI 43 for no gain (T.Keiser).",
                        "note": "FUMBLE",
                        "players": {
                            "00-0028742": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "T.Keiser",
                                    "statId": 79,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "T.Keiser",
                                    "statId": 120,
                                    "yards": 0
                                },
                                {
                                    "sequence": 8,
                                    "clubcode": "ARI",
                                    "playerName": "T.Keiser",
                                    "statId": 402,
                                    "yards": 14
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 53,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 55,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 10,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 57,
                                    "yards": -14
                                }
                            ]
                        }
                    },
                    "3634": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 4,
                        "time": "06:58",
                        "yrdln": "ARI 43",
                        "ydstogo": 22,
                        "ydsnet": 37,
                        "posteam": "SD",
                        "desc": "(6:58) M.Scifres punts 34 yards to ARI 9, Center-M.Windt, fair catch by T.Ginn.",
                        "note": "PUNT",
                        "players": {
                            "00-0025396": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 39,
                                    "yards": 0
                                }
                            ],
                            "00-0022017": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 29,
                                    "yards": 34
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Scifres",
                                    "statId": 30,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 3,
                "result": "Punt",
                "penyds": 5,
                "ydsgained": 32,
                "numplays": 13,
                "postime": "5:40",
                "start": {
                    "qtr": 4,
                    "time": "12:30",
                    "yrdln": "SD 20",
                    "team": "SD"
                },
                "end": {
                    "qtr": 4,
                    "time": "06:50",
                    "yrdln": "ARI 43",
                    "team": "SD"
                }
            },
            "21": {
                "posteam": "ARI",
                "qtr": 4,
                "redzone": true,
                "plays": {
                    "3671": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "06:50",
                        "yrdln": "ARI 9",
                        "ydstogo": 10,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "(6:50) C.Palmer pass incomplete short right to L.Fitzgerald.",
                        "note": null,
                        "players": {
                            "00-0022921": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 13
                                }
                            ]
                        }
                    },
                    "3693": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "06:46",
                        "yrdln": "ARI 9",
                        "ydstogo": 10,
                        "ydsnet": -4,
                        "posteam": "ARI",
                        "desc": "(6:46) (Shotgun) PENALTY on ARI-T.Larsen, False Start, 4 yards, enforced at ARI 9 - No Play.",
                        "note": "PENALTY",
                        "players": {
                            "00-0027607": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "T.Larsen",
                                    "statId": 93,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "3716": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "06:46",
                        "yrdln": "ARI 5",
                        "ydstogo": 14,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "(6:46) (Shotgun) C.Palmer pass short right to T.Ginn to ARI 9 for 4 yards (J.Verrett).",
                        "note": null,
                        "players": {
                            "00-0031334": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "J.Verrett",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 4
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 4
                                }
                            ],
                            "00-0025396": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 21,
                                    "yards": 4
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "T.Ginn",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3740": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "06:10",
                        "yrdln": "ARI 9",
                        "ydstogo": 10,
                        "ydsnet": 12,
                        "posteam": "ARI",
                        "desc": "(6:10) (Shotgun) C.Palmer scrambles right end ran ob at ARI 21 for 12 yards (M.Gilchrist).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0027988": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "M.Gilchrist",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 10,
                                    "yards": 12
                                }
                            ]
                        }
                    },
                    "3761": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "05:33",
                        "yrdln": "ARI 21",
                        "ydstogo": 10,
                        "ydsnet": 21,
                        "posteam": "ARI",
                        "desc": "(5:33) (Shotgun) C.Palmer pass short right to M.Floyd to ARI 30 for 9 yards (S.Wright).",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 9
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 9
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 9
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3785": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "05:00",
                        "yrdln": "ARI 30",
                        "ydstogo": 1,
                        "ydsnet": 39,
                        "posteam": "ARI",
                        "desc": "(5:00) A.Ellington up the middle to ARI 48 for 18 yards (J.Attaochu).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                }
                            ],
                            "00-0031258": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "J.Attaochu",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0030287": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "A.Ellington",
                                    "statId": 10,
                                    "yards": 18
                                }
                            ]
                        }
                    },
                    "3806": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "04:16",
                        "yrdln": "ARI 48",
                        "ydstogo": 10,
                        "ydsnet": 39,
                        "posteam": "ARI",
                        "desc": "(4:16) C.Palmer pass incomplete short left to J.Dwyer.",
                        "note": null,
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "3828": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "04:11",
                        "yrdln": "ARI 48",
                        "ydstogo": 10,
                        "ydsnet": 61,
                        "posteam": "ARI",
                        "desc": "(4:11) C.Palmer pass deep right to L.Fitzgerald ran ob at SD 30 for 22 yards.",
                        "note": null,
                        "players": {
                            "00-0022921": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 21,
                                    "yards": 22
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 22
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 22
                                }
                            ]
                        }
                    },
                    "3852": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "04:04",
                        "yrdln": "SD 30",
                        "ydstogo": 10,
                        "ydsnet": 62,
                        "posteam": "ARI",
                        "desc": "(4:04) J.Dwyer up the middle to SD 29 for 1 yard (C.Liuget; J.Johnson).",
                        "note": null,
                        "players": {
                            "00-0027956": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "C.Liuget",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0022139": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "J.Johnson",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ],
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 1
                                }
                            ]
                        }
                    },
                    "3873": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "03:22",
                        "yrdln": "SD 29",
                        "ydstogo": 9,
                        "ydsnet": 62,
                        "posteam": "ARI",
                        "desc": "(3:22) (Shotgun) C.Palmer pass incomplete short right to L.Fitzgerald.",
                        "note": null,
                        "players": {
                            "00-0022921": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 112,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "3895": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "03:17",
                        "yrdln": "SD 29",
                        "ydstogo": 9,
                        "ydsnet": 78,
                        "posteam": "ARI",
                        "desc": "(3:17) (Shotgun) C.Palmer pass deep middle to M.Floyd to SD 13 for 16 yards (S.Wright).",
                        "note": null,
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 15,
                                    "yards": 16
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 16
                                }
                            ],
                            "00-0029638": [
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 21,
                                    "yards": 16
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "M.Floyd",
                                    "statId": 113,
                                    "yards": 0
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 8,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3919": {
                        "sp": 1,
                        "qtr": 4,
                        "down": 1,
                        "time": "02:32",
                        "yrdln": "SD 13",
                        "ydstogo": 10,
                        "ydsnet": 91,
                        "posteam": "ARI",
                        "desc": "(2:32) C.Palmer pass short left to Jo. Brown for 13 yards, TOUCHDOWN.",
                        "note": "TD",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 16,
                                    "yards": 13
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 111,
                                    "yards": 1
                                }
                            ],
                            "00-0031051": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 22,
                                    "yards": 13
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "Jo. Brown",
                                    "statId": 113,
                                    "yards": 12
                                }
                            ]
                        }
                    },
                    "3940": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "02:25",
                        "yrdln": "SD 2",
                        "ydstogo": 0,
                        "ydsnet": 91,
                        "posteam": "ARI",
                        "desc": "TWO-POINT CONVERSION ATTEMPT. C.Palmer pass to L.Fitzgerald is incomplete. ATTEMPT FAILS.",
                        "note": "2PPF",
                        "players": {
                            "00-0022921": [
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "L.Fitzgerald",
                                    "statId": 105,
                                    "yards": 0
                                }
                            ],
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 78,
                                    "yards": 0
                                }
                            ]
                        }
                    }
                },
                "fds": 5,
                "result": "Touchdown",
                "penyds": -4,
                "ydsgained": 95,
                "numplays": 13,
                "postime": "4:25",
                "start": {
                    "qtr": 4,
                    "time": "06:50",
                    "yrdln": "ARI 9",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 4,
                    "time": "02:25",
                    "yrdln": "SD 13",
                    "team": "ARI"
                }
            },
            "22": {
                "posteam": "SD",
                "qtr": 4,
                "redzone": true,
                "plays": {
                    "3969": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "02:25",
                        "yrdln": "ARI 35",
                        "ydstogo": 0,
                        "ydsnet": 0,
                        "posteam": "ARI",
                        "desc": "C.Catanzaro kicks 65 yards from ARI 35 to end zone, Touchback.",
                        "note": "KICKOFF",
                        "players": {
                            "00-0030896": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 410,
                                    "yards": 75
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "C.Catanzaro",
                                    "statId": 44,
                                    "yards": 65
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 51,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "3984": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "02:25",
                        "yrdln": "SD 20",
                        "ydstogo": 10,
                        "ydsnet": 12,
                        "posteam": "SD",
                        "desc": "(2:25) (Shotgun) P.Rivers pass short middle to K.Allen ran ob at SD 32 for 12 yards (P.Peterson).",
                        "note": null,
                        "players": {
                            "00-0030279": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 21,
                                    "yards": 12
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 6,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 113,
                                    "yards": 10
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 4,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 12
                                },
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 2
                                }
                            ],
                            "00-0027943": [
                                {
                                    "sequence": 7,
                                    "clubcode": "ARI",
                                    "playerName": "P.Peterson",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "4008": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "02:18",
                        "yrdln": "SD 32",
                        "ydstogo": 10,
                        "ydsnet": 20,
                        "posteam": "SD",
                        "desc": "(2:18) (No Huddle, Shotgun) P.Rivers pass short right to A.Gates to SD 40 for 8 yards (S.Acho).",
                        "note": null,
                        "players": {
                            "00-0021547": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 21,
                                    "yards": 8
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 115,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "A.Gates",
                                    "statId": 113,
                                    "yards": 4
                                }
                            ],
                            "00-0028041": [
                                {
                                    "sequence": 6,
                                    "clubcode": "ARI",
                                    "playerName": "S.Acho",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 15,
                                    "yards": 8
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 111,
                                    "yards": 4
                                }
                            ]
                        }
                    },
                    "4032": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "02:00",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 20,
                        "posteam": "",
                        "desc": "Two-Minute Warning",
                        "note": null,
                        "players": {}
                    },
                    "4049": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "02:00",
                        "yrdln": "SD 40",
                        "ydstogo": 2,
                        "ydsnet": 20,
                        "posteam": "SD",
                        "desc": "(2:00) (Shotgun) P.Rivers pass incomplete short middle to E.Royal [T.Jefferson].",
                        "note": null,
                        "players": {
                            "00-0022942": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 1
                                }
                            ],
                            "00-0030294": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "T.Jefferson",
                                    "statId": 110,
                                    "yards": 0
                                }
                            ],
                            "00-0026182": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "E.Royal",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "4071": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "01:56",
                        "yrdln": "SD 40",
                        "ydstogo": 2,
                        "ydsnet": 20,
                        "posteam": "SD",
                        "desc": "(1:56) (Shotgun) P.Rivers pass incomplete short right to K.Allen.",
                        "note": null,
                        "players": {
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 7,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 5
                                }
                            ]
                        }
                    },
                    "4093": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "01:53",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 20,
                        "posteam": "",
                        "desc": "Timeout #2 by SD at 01:53.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "4121": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 4,
                        "time": "01:53",
                        "yrdln": "SD 40",
                        "ydstogo": 2,
                        "ydsnet": 20,
                        "posteam": "SD",
                        "desc": "(1:53) (Shotgun) P.Rivers pass incomplete short middle to K.Allen (L.Foote).",
                        "note": null,
                        "players": {
                            "00-0021246": [
                                {
                                    "sequence": 4,
                                    "clubcode": "ARI",
                                    "playerName": "L.Foote",
                                    "statId": 85,
                                    "yards": 0
                                }
                            ],
                            "00-0030279": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "K.Allen",
                                    "statId": 115,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 9,
                                    "yards": 0
                                }
                            ],
                            "00-0022942": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 14,
                                    "yards": 0
                                },
                                {
                                    "sequence": 5,
                                    "clubcode": "SD",
                                    "playerName": "P.Rivers",
                                    "statId": 112,
                                    "yards": 5
                                }
                            ]
                        }
                    }
                },
                "fds": 1,
                "result": "Downs",
                "penyds": 0,
                "ydsgained": 20,
                "numplays": 8,
                "postime": "0:36",
                "start": {
                    "qtr": 4,
                    "time": "02:25",
                    "yrdln": "SD 20",
                    "team": "SD"
                },
                "end": {
                    "qtr": 4,
                    "time": "01:49",
                    "yrdln": "SD 40",
                    "team": "SD"
                }
            },
            "23": {
                "posteam": "ARI",
                "qtr": 4,
                "redzone": true,
                "plays": {
                    "4144": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "01:49",
                        "yrdln": "SD 40",
                        "ydstogo": 10,
                        "ydsnet": 2,
                        "posteam": "ARI",
                        "desc": "(1:49) J.Dwyer up the middle to SD 38 for 2 yards (M.Te'o).",
                        "note": null,
                        "players": {
                            "00-0030278": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "M.Te'o",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 2
                                }
                            ]
                        }
                    },
                    "4165": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "01:43",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 2,
                        "posteam": "",
                        "desc": "Timeout #3 by SD at 01:43.",
                        "note": "TIMEOUT",
                        "players": {
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "SD",
                                    "playerName": "",
                                    "statId": 68,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "4182": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 2,
                        "time": "01:43",
                        "yrdln": "SD 38",
                        "ydstogo": 8,
                        "ydsnet": 5,
                        "posteam": "ARI",
                        "desc": "(1:43) J.Dwyer right tackle to SD 35 for 3 yards (S.Wright, B.Flowers).",
                        "note": null,
                        "players": {
                            "00-0027786": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 3
                                }
                            ],
                            "00-0028027": [
                                {
                                    "sequence": 2,
                                    "clubcode": "SD",
                                    "playerName": "S.Wright",
                                    "statId": 80,
                                    "yards": 0
                                }
                            ],
                            "00-0026175": [
                                {
                                    "sequence": 3,
                                    "clubcode": "SD",
                                    "playerName": "B.Flowers",
                                    "statId": 82,
                                    "yards": 0
                                }
                            ]
                        }
                    },
                    "4203": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 3,
                        "time": "00:56",
                        "yrdln": "SD 35",
                        "ydstogo": 5,
                        "ydsnet": 12,
                        "posteam": "ARI",
                        "desc": "(:56) J.Dwyer up the middle to SD 28 for 7 yards (D.Butler).",
                        "note": null,
                        "players": {
                            "00-0027682": [
                                {
                                    "sequence": 4,
                                    "clubcode": "SD",
                                    "playerName": "D.Butler",
                                    "statId": 79,
                                    "yards": 0
                                }
                            ],
                            "0": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 3,
                                    "yards": 0
                                },
                                {
                                    "sequence": 2,
                                    "clubcode": "ARI",
                                    "playerName": "",
                                    "statId": 6,
                                    "yards": 0
                                }
                            ],
                            "00-0027786": [
                                {
                                    "sequence": 3,
                                    "clubcode": "ARI",
                                    "playerName": "J.Dwyer",
                                    "statId": 10,
                                    "yards": 7
                                }
                            ]
                        }
                    },
                    "4224": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 1,
                        "time": "00:12",
                        "yrdln": "SD 28",
                        "ydstogo": 10,
                        "ydsnet": 11,
                        "posteam": "ARI",
                        "desc": "(:12) C.Palmer kneels to SD 29 for -1 yards.",
                        "note": null,
                        "players": {
                            "00-0021429": [
                                {
                                    "sequence": 1,
                                    "clubcode": "ARI",
                                    "playerName": "C.Palmer",
                                    "statId": 10,
                                    "yards": -1
                                }
                            ]
                        }
                    },
                    "4245": {
                        "sp": 0,
                        "qtr": 4,
                        "down": 0,
                        "time": "00:00",
                        "yrdln": "",
                        "ydstogo": 0,
                        "ydsnet": 11,
                        "posteam": "",
                        "desc": "END GAME",
                        "note": null,
                        "players": {}
                    }
                },
                "fds": 1,
                "result": "End of Game",
                "penyds": 0,
                "ydsgained": 11,
                "numplays": 6,
                "postime": "1:49",
                "start": {
                    "qtr": 4,
                    "time": "01:49",
                    "yrdln": "SD 40",
                    "team": "ARI"
                },
                "end": {
                    "qtr": 4,
                    "time": "00:00",
                    "yrdln": "",
                    "team": "ARI"
                }
            },
            "crntdrv": 23
        },
        "scrsummary": {
            "1265": {
                "type": "FG",
                "desc": "C.Catanzaro 22 yd. Field Goal Drive: 7 plays, 62 yards in 2:28",
                "qtr": 2,
                "team": "ARI",
                "players": {
                    "C.Catanzaro": "00-0030896"
                }
            },
            "1676": {
                "type": "FG",
                "desc": "N.Novak 36 yd. Field Goal Drive: 4 plays, -1 yards in 1:18",
                "qtr": 2,
                "team": "SD",
                "players": {
                    "N.Novak": "00-0023096"
                }
            },
            "2186": {
                "type": "FG",
                "desc": "C.Catanzaro 44 yd. Field Goal Drive: 3 plays, 30 yards in 0:16",
                "qtr": 2,
                "team": "ARI",
                "players": {
                    "C.Catanzaro": "00-0030896"
                }
            },
            "2409": {
                "type": "TD",
                "desc": "M.Floyd 6 yd. pass from P.Rivers (N.Novak kick is good) Drive: 7 plays, 80 yards in 3:22",
                "qtr": 3,
                "team": "SD",
                "players": {
                    "": "0",
                    "P.Rivers": "00-0022942",
                    "M.Floyd": "00-0022414",
                    "N.Novak": "00-0023096"
                }
            },
            "2718": {
                "type": "TD",
                "desc": "R.Mathews 20 yd. run (N.Novak kick is good) Drive: 3 plays, 29 yards in 1:17",
                "qtr": 3,
                "team": "SD",
                "players": {
                    "": "0",
                    "R.Mathews": "00-0027864",
                    "N.Novak": "00-0023096"
                }
            },
            "3301": {
                "type": "TD",
                "desc": "S.Taylor 5 yd. pass from C.Palmer (run failed) Drive: 10 plays, 64 yards in 4:43",
                "qtr": 4,
                "team": "ARI",
                "players": {
                    "": "0",
                    "C.Palmer": "00-0021429",
                    "S.Taylor": "00-0030282"
                }
            },
            "3919": {
                "type": "TD",
                "desc": "Jo. Brown 13 yd. pass from C.Palmer (pass failed) Drive: 11 plays, 91 yards in 4:25",
                "qtr": 4,
                "team": "ARI",
                "players": {
                    "": "0",
                    "C.Palmer": "00-0021429",
                    "Jo. Brown": "00-0031051"
                }
            }
        },
        "weather": null,
        "media": null,
        "yl": "",
        "qtr": "Final",
        "note": null,
        "down": 0,
        "togo": 0,
        "redzone": true,
        "clock": "00:12",
        "posteam": "ARI",
        "stadium": null
    }, "nextupdate": 297};

    // Public API here
    return {
        get: function(key) {
            return data[Object.keys(data)[0]][key];
        },

        getPlayers: function(statsObj) {
            var players = {};
            for (var key in statsObj) {
                for (var playerId in statsObj[key]) {
                    if (!players[playerId]) {
                        players[playerId] = { name: statsObj[key][playerId].name, stats: {}};
                    }
                    players[playerId].stats[key] = statsObj[key][playerId];
                }
            }
            return players;
        },

        findInPlayers: function(players, text) {
            var regex = new RegExp(text, 'i');
            for (var key in players) {
                var match = players[key].name.match(regex);
                if (match.length) {
                    return players[key]
                }
            }
        }
    };

  });
