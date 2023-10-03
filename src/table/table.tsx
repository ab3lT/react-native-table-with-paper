import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { DataTable, Card, TextInput, IconButton, MD3Colors } from 'react-native-paper';
import ScreenWrapper from './ScreenWrapper';
import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

export interface AssesmentTable {
    id: number;
    result: number;
    isSubmitted: boolean;
    isApproved: boolean;
    student: Student;
    assesmentWeight: AssesmentWeight;
}

export interface AssesmentWeight {
    id: number;
    name: string;
    weight: number;
    subject: Subject;
    assesmentType: AssesmentType;
}

export interface AssesmentType {
    id: number;
    name: string;
    generated: boolean;
    totalWeight: number;
}

export interface Subject {
    id: number;
    name: string;
    grade: Grade;
    section: Section;
    semester: Semester;
    teacher: Teacher;
}

export interface Grade {
    id: number;
    name: string;
    stream: string;
    branchName: string;
    numberOfSections?: number;
}





export interface Section {
    id: number;
    name: string;
    capacity: number;
    grade: Grade;
}

export interface Semester {
    id: number;
    name: string;
    academicYear: AcademicYear;
}

export interface AcademicYear {
    id: number;
    name: string;
    year: string;
}

export interface Teacher {
    firstName: string;
    middleName: string;
    lastName: string;
    userName: string;
}

export interface Student {
    firstName: string;
    middleName: string;
    lastName: string;
    studentId: string;
    email: string;
    username: string;
}

const DataTableExample = () => {
    const [sortAscending, setSortAscending] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editedValue, setEditedValue] = useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    const [items] = useState<Array<AssesmentTable>>([
        {
            "id": 13,
            "result": 12,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Daniel ",
                "middleName": "Abel",
                "lastName": "Mulgeta",
                "studentId": "BGY/12322/12",
                "email": "dam567y23@bgisaddis.com",
                "username": "dam567y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 61,
            "result": 29,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Kalab",
                "middleName": "Abel",
                "lastName": "Mulgeta",
                "studentId": "BGY/12323/12",
                "email": "kam714y23@bgisaddis.com",
                "username": "kam714y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 22,
            "result": 17,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "simret",
                "middleName": "Mekbib",
                "lastName": "Kebede",
                "studentId": "ATR5625/11",
                "email": "smk095y23@bgisaddis.com",
                "username": "smk095y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 23,
            "result": 29,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Abebe",
                "middleName": "Mola",
                "lastName": "Kebede",
                "studentId": "schoolId1",
                "email": "amk727y23@bgisaddis.com",
                "username": "amk727y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 24,
            "result": 26,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Yoseph",
                "middleName": "Mekbib",
                "lastName": "Kebede",
                "studentId": "SchoolId2",
                "email": "ymk226y23@bgisaddis.com",
                "username": "ymk226y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 25,
            "result": 25,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Abera",
                "middleName": "Mola",
                "lastName": "Mekbib",
                "studentId": "SchoolId3",
                "email": "amm599y23@bgisaddis.com",
                "username": "amm599y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 26,
            "result": 28,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Abera",
                "middleName": "Mola",
                "lastName": "Mekbib",
                "studentId": "SchoolId4",
                "email": "amm681y23@bgisaddis.com",
                "username": "amm681y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        },
        {
            "id": 27,
            "result": 23,
            "isSubmitted": false,
            "isApproved": false,
            "student": {
                "firstName": "Maramawit",
                "middleName": "Mekbib",
                "lastName": "Kebede",
                "studentId": "ATR5625/11",
                "email": "mmk823y23@bgisaddis.com",
                "username": "mmk823y23"
            },
            "assesmentWeight": {
                "id": 7,
                "name": "Test-1",
                "weight": 30,
                "subject": {
                    "id": 5,
                    "name": "English",
                    "grade": {
                        "id": 1,
                        "name": "Grade-1",
                        "stream": "General",
                        "branchName": "Main"
                    },
                    "section": {
                        "id": 1,
                        "name": "Section-A",
                        "capacity": 50,
                        "grade": {
                            "id": 1,
                            "name": "Grade-1",
                            "numberOfSections": 3,
                            "stream": "General",
                            "branchName": "Main"
                        }
                    },
                    "semester": {
                        "id": 1,
                        "name": "Semester-1",
                        "academicYear": {
                            "id": 1,
                            "name": "2022/23",
                            "year": "2023-06-09T19:20:33.2033"
                        }
                    },
                    "teacher": {
                        "firstName": "Meseret",
                        "middleName": "Yoseph",
                        "lastName": "Mekbib",
                        "userName": "mym768y23"
                    }
                },
                "assesmentType": {
                    "id": 6,
                    "name": "Continious",
                    "generated": true,
                    "totalWeight": 30
                }
            }
        }
    ]
    );
    const [numberOfItemsPerPageList] = useState([5, 20, 30, 100]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );
    const sortedItems = items
        .slice()
        .sort((item1, item2) =>
            (sortAscending ? item1.result < item2.result : item2.result < item1.result)
                ? 1
                : -1
        );
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    const handleSave = (index: any) => {
        // Update the data with the edited value
        // data[index].age = parseInt(editedValue, 10);
        // Clear the editing state
        setEditIndex(null);
        setEditedValue('');
    };
    const handleEdit = (index: any) => {
        setEditIndex(index);
        setEditedValue('');
    };
    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <ScreenWrapper contentContainerStyle={styles.content}>
            <Searchbar
                placeholder="Search Result"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Card>
                <ScrollView horizontal={true}>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title

                                style={styles.first}
                            >
                                Student Name
                            </DataTable.Title>
                            <DataTable.Title >User Name</DataTable.Title>

                            <DataTable.Title numeric
                                sortDirection={sortAscending ? 'ascending' : 'descending'}
                                onPress={() => setSortAscending(!sortAscending)}
                            >result</DataTable.Title>
                            <DataTable.Title numeric

                            >Actions</DataTable.Title>
                        </DataTable.Header>

                        {sortedItems.slice(from, to).map((item) => (
                            <DataTable.Row key={item.id}>

                                <DataTable.Cell style={styles.first}>{item.student.firstName} {item.student.lastName}</DataTable.Cell>
                                <DataTable.Cell style={styles.second}>{item.student.username}</DataTable.Cell>

                                <DataTable.Cell style={styles.three} numeric>{editIndex === item.id ? (
                                    <TextInput
                                        value={editedValue}
                                        onChangeText={(text) => setEditedValue(text)}
                                    />
                                ) : (
                                    item.result.toString()
                                )}</DataTable.Cell>
                                <DataTable.Cell >
                                    {/* {editIndex === item.id ? (
                                    <DataTable.Row onPress={() => handleSave(item.id)}>Save</DataTable.Row>
                                    ) : (
                                        <DataTable.Row onPress={() => handleEdit(item.id)}>Edit</DataTable.Row>
                                    )} */}
                                    {
                                /* <IconButton
                                    icon="archive-edit"
                                    iconColor={MD3Colors.primary30}
                                    size={20}
                                    onPress={() => {
                                        console.log('Pressed');
                                        console.log(item.student.firstName);
                                        
                                    }} */}
                                    {/* /> */}
                                    {/* <TextInput style={{ backgroundColor: 'red' }}
                                    value={item.result.toString()}
                                    onChangeText={() => { }}
                                /> */}
                                </DataTable.Cell>
                            </DataTable.Row>
                        ))}

                        <DataTable.Pagination
                            page={page}
                            numberOfPages={Math.ceil(sortedItems.length / itemsPerPage)}
                            onPageChange={(page) => setPage(page)}
                            label={`${from + 1}-${to} of ${sortedItems.length}`}
                            numberOfItemsPerPageList={numberOfItemsPerPageList}
                            numberOfItemsPerPage={itemsPerPage}
                            onItemsPerPageChange={onItemsPerPageChange}
                            showFastPaginationControls
                            selectPageDropdownLabel={'Rows per page'}
                        />
                    </DataTable>
                </ScrollView>
            </Card>
        </ScreenWrapper>
    );
};

DataTableExample.title = 'Data Table';

const styles = StyleSheet.create({
    content: {
        padding: 8,
        paddingTop: 50,
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    tableHeader: {
        color: 'green'
    },

    first: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignContent: 'space-around',
        backgroundColor: 'green',
        alignItems: 'center'


    },
    second: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'red'

    },
    three: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'yellow'

    },
    4: {
        flex: 2,
        justifyContent: 'flex-start',
        backgroundColor: 'red'

    },
});

export default DataTableExample;
