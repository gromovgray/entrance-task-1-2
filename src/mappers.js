
/**
 * @param {Object} serverData
 * @return {Object}
 */
export function mapServerData(serverData) {
  return {
    type: 'FeatureCollection',
    features: serverData.map((obj, index) => ({
      id: index,
      type: 'Feature',
      isActive: obj.isActive,
      geometry: {
        type: 'Point',
        coordinates: [obj.lat, obj.long],
      },
      properties: {
        iconCaption: obj.serialNumber,
      },
      options: {
        preset: getObjectPreset(obj),
      },
    })),
  };
}

/**
 * @param {{isActive: boolean}} obj
 * @return {string}
 */
function getObjectPreset(obj) {
  return obj.isActive ?
    'islands#blueCircleDotIconWithCaption' :
    'islands#redCircleDotIconWithCaption';
}
