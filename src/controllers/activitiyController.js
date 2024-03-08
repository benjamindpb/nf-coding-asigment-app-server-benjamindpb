import { FertilizationAreaActivity } from '../models/FertilizationAreaActivity.js';
import { SoilSampleActivity } from '../models/SoilSampleActivity.js';

export const getSoilSamples = async (req, res) => {
  const soilSamples = await SoilSampleActivity.findAll();
  return res.send({
    msg: 'getting soil samples',
    soilSamples,
  })
};

export const createSoilSample = async (req, res) => {
  const {
    coords,
    carbonMeasurement,
    activityDate,
  } = req.body;
  const pointDataType = {
    type: 'Point',
    coordinates: [coords[1], coords[0]],
  };
  const newSoilSample = await SoilSampleActivity.create({
    coords: pointDataType,
    carbonMeasurement,
    activityDate,
  });
  return res.send({
    msg: 'soil sample created',
    newSoilSample,
  });
};

export const getSoilSampleById = (req, res) => {
  const { id } = req.body;
  const soilSample = SoilSampleActivity.findOne({
    where: {
      id
    }
  });
  if (soilSample) {
    return res.send({
      msg: 'soil sample found',
      soilSample,
    });
  }
  return res.send({
    msg: 'soil sample not found'
  })
}

export const deleteSoilSampleById = (req, res) => {
  const { id } = req.body;
  const deletedSoilSample = SoilSampleActivity.destroy({
    where: {
      id,
    },
  });
  if (deletedSoilSample > 0) {
    return res.send({
      msg: 'soil sample deleted'
    })
  }
  return res.send({
    msg: 'soil sample not found'
  })
}

export const getFertilizationAreas = async (req, res) => {
  const soilSamples = await FertilizationAreaActivity.findAll();
  return res.send({
    msg: 'getting fertilizer areas',
    soilSamples,
  });
};

export const createFertilizationArea = async (req, res) => {
  const {
    polygonPointsStr,
    fertilizerApplied,
    activityDate,
  } = req.body;
  const parsePolygonPoints = JSON.parse(polygonPointsStr);
  const len = parsePolygonPoints.length;
  if (len < 3) {
    return res.status(404).json({
      msg: 'Error: at least 3 points are needed to form a polygon'
    })
  }
  if (parsePolygonPoints[0][0] !== parsePolygonPoints[len - 1][0] || parsePolygonPoints[0][1] !== parsePolygonPoints[len - 1][1]) {
    return res.status(404).json({
      msg: 'Error: the start coordinates and end coordinates are not the same'
    })
  }
  const polygonDataType = {
    type: 'Polygon',
    coordinates: [parsePolygonPoints],
  };
  const newFertilizationArea = await FertilizationAreaActivity.create({
    polygonPoints: polygonDataType,
    fertilizerApplied,
    activityDate,
  })
  return res.send({
    msg: 'fertilizer area created',
    newFertilizationArea,
  })
};

export const getFertilizationAreaById = (req, res) => {
  const { id } = req.body;
  const fertilizationArea = FertilizationAreaActivity.findOne({
    where: {
      id
    }
  });
  if (fertilizationArea) {
    return res.send({
      msg: 'fertilization area found',
      soilSample,
    });
  }
  return res.send({
    msg: 'fertilization area not found'
  })
};

export const deleteFertilizationAreaById = (req, res) => {
  const { id } = req.body;
  const deletedFertilizationArea = FertilizationAreaActivity.destroy({
    where: {
      id,
    },
  });
  if (deletedFertilizationArea > 0) {
    return res.send({
      msg: 'fertilization area deleted'
    })
  }
  return res.send({
    msg: 'fertilization area not found'
  })
}
