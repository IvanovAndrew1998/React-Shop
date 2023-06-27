import { IAttributeCategory, IAttributeItem } from "../Store/Entities.ts";
import { BaseApi } from "./BaseApi.ts";

export class CatalogueApi extends BaseApi {
    async getCatalogueTags(): Promise<IAttributeCategory[]> {
        const result = this.get(
            'catalogue/',
            [
                {
                    key: 'attributes',
                    value: 'true'
                }
            ]
        )
        return result as unknown as IAttributeCategory[];
    }

    async getCatalogue(tags: string[], min_price: number, max_price: number, order_by: '+rating' | '-rating') {

        var params = 
            tags.map(tag => {
                return {
                    key: 'tags__name_in',
                    value: tag,
                };
            }
            );


        if (max_price) {
            params.push(
                {
                    key: 'sizes_weights_prices__0__discounted_price__lt',
                    value: max_price.toString()
                }
            );
        }

        if (params) {
            params.push(
                {
                    key: 'order_by',
                    value: order_by
                }
            );
            
        }

        console.log(params);

        return this.get('catalogue/', params);
    }
}