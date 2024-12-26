/* eslint-disable */

import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls.jsx';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);


//activities
export const getSinglePackageById = (payload_data, id) => {
  return project.get(Urls.GET_SINGLE_PACKAGES_BY_ID+id, payload_data);
};
