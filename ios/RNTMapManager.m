//
//  RNTMapManager.m
//  ergate_ticker_mobile
//
//  Created by apple on 2017/10/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
