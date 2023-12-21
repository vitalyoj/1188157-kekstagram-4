import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { showAlert, debounce } from './util.js';
import { getData } from './api.js';
import { initFilters, getFilteredPictures } from './filter.js';
import './upload-images.js';

setupForm();

async function rendersGallery() {
  try {
    const data = await getData();
    const debouncedRenderGallery = debounce(renderGallery);
    initFilters(data, debouncedRenderGallery);
    renderGallery(getFilteredPictures());
  } catch (err) {
    showAlert(err.message);
  }
}

rendersGallery();
