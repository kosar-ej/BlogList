"use client";
import { CustomModalType } from "@/types";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import MyButton from "./MyButton";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  description,
  onOk,
  loading,
}: CustomModalType) => {
  return (
    <Dialog
      transition
      open={isOpen}
      onClose={onClose}
      className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/40" />
      <div className="fixed top-9 inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 bg-white shadow-2xl p-2 lg:p-10">
          <DialogTitle className="font-bold">{title}</DialogTitle>
          <Description>{description}</Description>
          <br />
          <div className="flex gap-4">
            <MyButton type='danger' text="Ok" onClick={onOk} loading={loading} />
            <MyButton type='primary-small' text="Canceal" onClick={onClose} />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CustomModal;
