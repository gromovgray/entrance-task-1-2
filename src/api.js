
import {mapServerData} from './mappers';

/**
 * @return {Promise.<Object>}
 */
export function loadList() {
  return fetch('/api/stations')
    .then(response => response.json())
    .then(mapServerData);
}

/**
 * @param {number} id
 * @return {Promise.<Object>}
 */
export function loadDetails(id) {
  return fetch(`/api/stations/${id}`).then(response => response.json());
}
