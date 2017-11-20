//
//  RNTestViewManager.m
//  ergate_ticker_mobile
//
//  Created by apple on 2017/10/29.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTestView.h"
#import "RNTestViewManager.h"
#import <MapKit/MapKit.h>

@implementation RNTestViewManager

RCT_EXPORT_MODULE(RNTestView);

- (UIView *)View
{
  NSLog(@"----------- export test view!!");
  
  return [[MKMapView alloc] init];
}

@end
