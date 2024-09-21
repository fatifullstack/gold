import { IconButton, Paper, Tooltip } from "@mui/material";
import GeneralTable from "app/components/GeneralTable/GeneralTable";
import i18n from "i18n";
import React from "react";
import { useState } from "react";
import AddEditMiningSiteDialog from "./AddEditMiningSiteDialog";
import { DesignServices, Edit, Settings, Visibility } from "@mui/icons-material";

const MiningSites = () => {

    const [isOpenAddEditMiningSiteDialog, setIsOpenAddEditMiningSiteDialog] = useState(false);
    const [selectedSite, setSelectedSite] = useState(null);


    const renderColumns = () => {
        return [
            {
                label: 'Name',
                name: 'name',
            },
            {
                label: 'General manager',
                name: 'generalManager',
            },
            {
                label: 'Start date',
                name: 'startDate',
            },
            {
                label: 'GPS coordinates',
                name: 'coordinates',
            },
            {
                label: 'Country',
                name: 'country',
            },
            {
                label: 'City',
                name: 'city',
            },
            {
                label: 'Extracted material',
                name: 'extractedMaterial',
            },
            {
                label: 'Departments',
                name: 'departments',
                options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    download: false,
                    customBodyRender: (value, row) => (
                        <Tooltip title="Open">
                            <IconButton size="large">
                                <Edit />
                            </IconButton>
                        </Tooltip>
                    )

                }
            },
            // {
            //     label: 'Services',
            //     name: 'services',
            //     options: {
            //         filter: false,
            //         sort: false,
            //         empty: true,
            //         download: false,
            //         customBodyRender: (value, row) => (
            //             <Tooltip title="Open">
            //                 <IconButton size="large">
            //                     <Settings />
            //                 </IconButton>
            //             </Tooltip>
            //         )

            //     }
            // }
        ]
    }

    const data = [
        {
            name: "Site 1",
            generalManager: "Romuald tiegnan",
            startDate: "18/07/1965",
            coordinates: "1.0008752, 1.1005478",
            country: "Ivory Coast",
            city: "Yamoussoukro",
            extractedMaterial: "Gold"
        },
        {
            name: "Site 2",
            generalManager: "Romuald tiegnan",
            startDate: "18/07/2001",
            coordinates: "2.0008752, 2.1005478",
            country: "Burkina Faso",
            city: "Ouagadougou",
            extractedMaterial: "Gold"
        },
       {
            name: "Site 3",
            generalManager: "Romuald tiegnan",
            startDate: "18/07/2002",
            coordinates: "3.0008752, 3.1005478",
            country: "Ghana",
            city: "Obuasi",
            extractedMaterial: "Gold"
        },
        {
            name: "Site 4",
            generalManager: "Romuald tiegnan",
            startDate: "18/07/2004",
            coordinates: "4.0008752, 4.1005478",
            country: "Guinea",
            city: "Conakry",
            extractedMaterial: "Bauxite"
        },
        /* {
            name: "Site 5",
            generalManager: "Romuald tiegnan",
            startDate: "18/07/2006",
            coordinates: "5.0008752, 5.1005478",
            country: "Mali",
            city: "Bamako",
            extractedMaterial: "Gold"
        }*/
    ]

    const handleCloseAddEdit = () => {
        setIsOpenAddEditMiningSiteDialog(false);
        setSelectedSite(null);
    }

    return (
        <>
            <AddEditMiningSiteDialog
                open={isOpenAddEditMiningSiteDialog}
                handleClose={handleCloseAddEdit}
                // handleAddDone={handleAddDone}
                // handleUpdateDone={handleUpdateDone}
                selectedSite={selectedSite}
            />
            <Paper elevation={6} style={{ padding: 20, margin: 50 }}>
                <GeneralTable
                    data={data}
                    columns={renderColumns()}
                    title="Mining Sites"
                // addButtonVisibility={ability.can("ADD", "PRODUCT")}
                // editButtonVisibility={ability.can("EDIT", "PRODUCT")}
                // deleteButtonVisibility={ability.can("DELETE", "PRODUCT")}
                // handleAddClick={handleOpenAdd}
                // handleEditClick={handleOpenEdit}
                // handleDeleteClick={handleOpenDeleteConfirmation}
                // handlePreviewClick={handleOpenPreviewProductDialog}
                />
            </Paper>
        </>
    )
}

export default MiningSites;