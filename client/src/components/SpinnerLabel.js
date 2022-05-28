import { CircularProgress, Dialog } from "@mui/material";
import React from "react";

const SpinnerLabel = (props) => {
    return (
        <Dialog open={props?.isOpen}>
            <div className="w-[240px] prose-nbx gap-[16px] bg-light-neutral-grey-900 h-[128px] p-[24px] flex flex-col justify-center items-center">
                <CircularProgress size={40} />
                {props?.label && <span className="text-center medium400 text-white">
                    {props?.label}
                </span>}
            </div>
        </Dialog>
    )
}

export default SpinnerLabel;