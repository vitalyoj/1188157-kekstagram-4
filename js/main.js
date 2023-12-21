import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';

renderGallery(getPictures());
setupForm();
