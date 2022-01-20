const datafile = {
  "accountId": "12345",
  "anonymizeIP": false,
  "botFiltering": false,
  "projectId": "23456",
  "revision": "6",
  "version": "4",
  "experiments": [
      {
          "key": "my_experiment",
          "id": "45678",
          "layerId": "34567",
          "status": "Running",
          "variations": [
              {
                  "id": "56789",
                  "key": "control",
                  "variables": []
              },
              {
                  "id": "67890",
                  "key": "treatment",
                  "variables": []
              }
          ],
          "trafficAllocation": [
              {
                  "entityId": "56789",
                  "endOfRange": 5000
              },
              {
                  "entityId": "67890",
                  "endOfRange": 10000
              }
          ],
          "audienceIds": [],
          "forcedVariations": {}
      }
  ],
  "featureFlags": [
      {
          "experimentIds": [],
          "id": "56789",
          "key": "price_filter",
          "rolloutId": "67890",
          "variables": [
              {
                  "defaultValue": "100",
                  "id": "12345",
                  "key": "min_price",
                  "type": "integer"
              }
          ]
      }
  ],
  "events": [
      {
          "experimentIds": [
              "34567"
          ],
          "id": "56789",
          "key": "my_conversion"
      }
  ],
  "audiences": [],
  "attributes": [],
  "groups": [],
  "rollouts": [
      {
          "experiments": [
              {
                  "audienceIds": [],
                  "forcedVariations": {},
                  "id": "23456",
                  "key": "23456",
                  "layerId": "34567",
                  "status": "Running",
                  "trafficAllocation": [
                      {
                          "endOfRange": 5000,
                          "entityId": "45678"
                      }
                  ],
                  "variations": [
                      {
                          "featureEnabled": true,
                          "id": "56789",
                          "key": "56789",
                          "variables": [
                              {
                                  "id": "67890",
                                  "value": "100"
                              }
                          ]
                      }
                  ]
              }
          ],
          "id": "78901"
      }
  ],
  "variables": []
}

export default datafile
