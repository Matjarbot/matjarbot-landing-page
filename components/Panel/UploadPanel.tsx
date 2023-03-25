import React, { ReactElement, useState } from "react";
import Panel from "./Panel";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { t } from "i18next";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function UploadPanel(): ReactElement {
    const [files, setFiles]: any = useState([])
  return (
    <>
      <Panel>
      <FilePond
        files={files}
        credits={undefined}
        onupdatefiles={setFiles}
        allowMultiple={false}
        labelFileLoading={t('loading_text')}
        labelFileSizeNotAvailable={t('file_size_not_available')}
        labelInvalidField={t('file_invalid_field')}
        labelFileWaitingForSize={t('file_waiting_for_size')}
        labelFileLoadError={t('file_error_load_size')}
        labelFileProcessing={t('file_processing_text')}
        labelFileProcessingComplete={t('file_processing_complete')}
        labelFileProcessingAborted={t('file_processing_aborted')}
        labelFileProcessingError={t('file_processing_error')}
        labelFileProcessingRevertError={t('file_processing_revert_error')}
        labelFileRemoveError={t('file_remove_error')}
        labelTapToCancel={t('file_tap_to_cancel')}
        labelTapToRetry={t('file_tap_to_retry')}
        labelTapToUndo={t('file_tap_to_undo')}
        labelButtonRemoveItem={t('file_button_remove_item')}
        labelButtonAbortItemLoad={t('file_button_abort_item_load')}
        labelButtonRetryItemLoad={t('file_button_retry_item_load')}
        labelButtonAbortItemProcessing={t('file_button_abort_item_processing')}
        labelButtonUndoItemProcessing={t('file_button_undo_item_processing')}
        labelButtonRetryItemProcessing={t('file_button_retry_item_processing')}
        labelButtonProcessItem={t('file_button_process_item')}
        maxFiles={3}
        //server="/api"
        name="files"
        labelIdle={t('drag_and_drop_text') + '<span class="filepond--label-action">' + t('browser_text') + '</span>'}
      />
      </Panel>
    </>
  );
}

export default UploadPanel;
