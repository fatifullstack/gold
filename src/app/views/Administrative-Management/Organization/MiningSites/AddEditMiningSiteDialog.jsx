import React, { useEffect } from "react";
import {
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox
} from "@mui/material";
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import moment from "moment";


function AddEditMiningSiteDialog(props) {

    const [startDate, setStartDate] = useState(new moment());


    const {
        handleClose,
        handleAddDone,
        handleUpdateDone,
        open,
        selectedSite
    } = props;

    const { register, handleSubmit, reset } = useForm({ mode: 'onTouched' });

    const onClose = (event, reason) => {
        if (reason === 'backdropClick') {
            return false;
        }

        if (reason === 'escapeKeyDown') {
            return false;
        }

        if (typeof onClose === 'function') {
            handleClose();
        }
    };

    // const handleSave = (data) => {
    //     const PP = profilePictureRef.current;
    //     const imageAsDataURL = PP.getImageAsDataUrl(1);
    //     const client = {
    //         ...data,
    //         image: null,
    //         isIndividual: data.isIndividual ? "yes" : "no"
    //     }
    //     if (PP.getData().imageSrc) {
    //         client.image = imageAsDataURL;
    //     }
    //     if (selectedSite) {
    //         client.id = selectedSite.id;
    //         ClientService.update(client).then(({ data }) => {
    //             handleUpdateDone(data);
    //         }).catch((err) => catchServerError(dispatch, tGeneral, err))
    //     } else {
    //         ClientService.add(client).then(({ data }) => {
    //             handleAddDone(data);
    //         }).catch((err) => catchServerError(dispatch, tGeneral, err))
    //     }
    // }

    useEffect(() => {
        if (open && selectedSite) {
            reset(selectedSite);
        } else {
            reset({
                name: "",
                startDate: "",
                coordinates: "",
                country: "",
                city: "",
                extractedMaterial: ""
            });
            setStartDate(new moment())
        }
    }, [open])

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>
                <Typography variant="subtitle1" color="primary">
                    {selectedSite ? "Edit Site" : "Add Site"}
                </Typography>
                <Typography variant="subtitle2" style={{ marginBottom: 20 }}>
                    {selectedSite ? "Fill the form to edit the site" : "Fill the form to add a site"}
                </Typography>
            </DialogTitle>
            <DialogContent style={{ padding: 20 }}>
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                >
                    <form
                        id="add-client-form"
                    // onSubmit={handleSubmit(handleSave)}
                    >
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    required
                                    fullWidth
                                    defaultValue={selectedSite?.name}
                                    {...register('name')}
                                    style={{
                                        marginBottom: 20
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* <TextField
                                    id="startDate"
                                    label="Start date"
                                    variant="outlined"
                                    name="startDate"
                                    fullWidth
                                    defaultValue={selectedSite?.startDate}
                                    {...register('startDate')}
                                    style={{
                                        marginBottom: 5
                                    }}
                                /> */}
                                <DateTimePicker
                                    value={startDate}
                                    slotProps={{ textField: { fullWidth: true } }}
                                    onChange={(value) => {
                                        console.log(value)
                                        setStartDate(value)
                                    }}
                                    ampm={false}
                                    renderInput={(params) =>
                                        <TextField
                                            id="startDate"
                                            name="startDate"
                                            {...params}
                                            label="Start date"
                                            fullWidth
                                            {...register('startDate')}
                                            required
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="country"
                                    label="Country"
                                    variant="outlined"
                                    name="country"
                                    fullWidth
                                    defaultValue={selectedSite?.country}
                                    {...register('country')}
                                    style={{
                                        marginBottom: 10
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="city"
                                    label="City"
                                    variant="outlined"
                                    name="city"
                                    fullWidth
                                    defaultValue={selectedSite?.city}
                                    {...register('city')}
                                    style={{
                                        marginBottom: 10
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="coordinates"
                                    label="GPS Coordinates"
                                    variant="outlined"
                                    name="coordinates"
                                    fullWidth
                                    defaultValue={selectedSite?.coordinates}
                                    {...register('coordinates')}
                                    style={{
                                        marginBottom: 5
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="extractedMaterial"
                                    label="Extracted material"
                                    variant="outlined"
                                    name="extractedMaterial"
                                    fullWidth
                                    defaultValue={selectedSite?.extractedMaterial}
                                    {...register('extractedMaterial')}
                                    style={{
                                        marginBottom: 10
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>
                    Close
                </Button>
                <Button color="primary" type="submit" form="add-site-form">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )

}

AddEditMiningSiteDialog.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleAddDone: PropTypes.func,
    handleUpdateDone: PropTypes.func,
    open: PropTypes.bool.isRequired,
    selectedSite: PropTypes.object,
}

AddEditMiningSiteDialog.defaultProps = {
    handleClose: () => { },
    handleAddDone: () => { },
    handleUpdateDone: () => { },
    open: false,
    selectedSite: null,
}

export default AddEditMiningSiteDialog;