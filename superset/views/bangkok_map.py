# superset/views/bangkok_map.py
from flask_appbuilder import expose, BaseView
from flask import render_template


class MapView(BaseView):
    route_base = "/bangkok-map"

    @expose('/')
    def show(self):
        return render_template('bangkok_map.html')

    @expose('/api/geojson')
    def get_geojson(self):
        # Sample GeoJSON data
        return self.json_response({
            'type': 'FeatureCollection',
            'features': [{
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[78, 20], [80, 20], [80, 22], [78, 22], [78, 20]]]
                },
                'properties': {
                    'name': 'Sample Area'
                }
            }]
        })
